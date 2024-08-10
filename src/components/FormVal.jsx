import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import TableSinhVien from "./TableSinhVien";
import * as yup from "yup";
import { getValueLocalStorage, setValueLocalStorage } from "./util/utils";
const FormVal = () => {
  // const [values, setValues] = useState("");
  const [arrSinhVien, setArrSinhVien] = useState([]);
  const [dataSinhVien, setDataSinhVien] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    values,
    handleSubmit,
    resetForm,
    setValues,
    handleChange,
    // setFieldValue,
    handleReset,
    isValid,
    errors,
    touched, // true or false
    handleBlur,
  } = useFormik({
    //lưu trữ dữ liệu cho các input
    initialValues: {
      masv: "",
      hoten: "",
      sodienthoai: "",
      email: "",
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      const newArrSinhVien = [...arrSinhVien, values];
      setArrSinhVien(newArrSinhVien);
      setValueLocalStorage("arrSinhVien", newArrSinhVien);
      resetForm();
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Vui lòng không để trống")
        .email("Vui lòng nhập định dạng email"),
      masv: yup
        .string()
        .required("Vui lòng không để trống")
        .min(5, "Không nhập dưới 5 ký tự")
        .max(9, "Không nhập quá 9 ký tự"),
      sodienthoai: yup
        .string()
        .matches(
          /^(?:\+84|0)(?:3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
          "Vui lòng nhập đúng định dạng số điện thoại"
        )
        .max(10, "Không nhập quá 10 số ")
        .required("Vui lòng không để trống"),

      hoten: yup.string().required("Vui lòng không để trống"),
    }),
  });
  // console.log(arrSinhVien);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredSinhVien = arrSinhVien.filter((sinhVien) =>
    sinhVien.hoten.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const data = getValueLocalStorage("arrSinhVien");
    data && setArrSinhVien(data);
  }, []);

  useEffect(() => {
    dataSinhVien && setValues(dataSinhVien);
  }, [dataSinhVien]);

  const xoaSinhVien = (masv) => {
    const newArrSinhVien = [...arrSinhVien];
    let index = newArrSinhVien.findIndex((item) => item.masv == masv);
    if (index != -1) {
      newArrSinhVien.splice(index, 1);
      setArrSinhVien(newArrSinhVien);
      setValueLocalStorage("arrSinhVien", newArrSinhVien);
    }
  };

  const getSinhVien = (dataSinhVien) => {
    setDataSinhVien(dataSinhVien);
  };
  return (
    <div>
      <div className="container">
        <div className="text-white bg-slate-900 px-3 py-5 text-3xl">
          <h1>Thông tin sinh viên</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-3 mb-6  md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Mã SV
                </label>
                <input
                  type="text"
                  className={` bg-gray-50 border border-black  text-gray-900 text-sm rounded-lg ${
                    errors.masv && touched.masv
                      ? "border-red-500"
                      : "border-blue-500"
                  }  block w-full p-2.5 `}
                  placeholder="Nhập mã số sinh viên"
                  name="masv"
                  value={values.masv}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.masv && touched.masv && (
                  <p className="text-red-500">{errors.masv}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Họ Tên
                </label>
                <input
                  type="text"
                  className={` bg-gray-50 border border-black  text-gray-900 text-sm rounded-lg ${
                    errors.hoten && touched.hoten
                      ? "border-red-500"
                      : "border-blue-500"
                  }  block w-full p-2.5 `}
                  placeholder="Nhập họ tên"
                  name="hoten"
                  value={values.hoten}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.hoten && touched.hoten && (
                  <p className="text-red-500">{errors.hoten}</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className={` bg-gray-50 border border-black  text-gray-900 text-sm rounded-lg ${
                    errors.sodienthoai && touched.sodienthoai
                      ? "border-red-500"
                      : "border-blue-500"
                  }  block w-full p-2.5 `}
                  placeholder="Nhập số điện thoại"
                  name="sodienthoai"
                  value={values.sodienthoai}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.sodienthoai && touched.sodienthoai && (
                  <p className="text-red-500">{errors.sodienthoai}</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="text"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Nhập email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email ? (
                  <p className="text-red-500">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <button
                  type="submit"
                  className="rounded-md bg-green-600 text-white px-2 py-3"
                >
                  Thêm sinh viên
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className=" ml-3 rounded-md bg-green-600 text-white px-2 py-3"
                >
                  reset
                </button>
                <button
                  type="button"
                  onClick={() => {
                    console.log(values);
                    if (!isValid) {
                      return;
                    }
                    const index = arrSinhVien.findIndex(
                      (sv) => sv.masv == values.masv
                    );
                    if (index !== -1) {
                      const updateSinhVien = [...arrSinhVien];
                      updateSinhVien[index] = values;
                      setArrSinhVien(updateSinhVien);
                      setValueLocalStorage("arrSinhVien", updateSinhVien);
                      resetForm();
                      alert("Cập nhật thành công");
                    } else {
                      alert("Câp nhật thất bại");
                    }
                  }}
                  className="rounded-md ml-3 bg-black text-white px-2 py-3"
                >
                  Cập nhật
                </button>
              </div>
              <input
                className="border px-3 py-2 border-gray-300 rounded-md "
                type="search"
                placeholder="Nhập tên"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </form>
        </div>
        <TableSinhVien
          deleteSinhVien={xoaSinhVien}
          getSinhVien={getSinhVien}
          arrSinhVien={filteredSinhVien}
        />
      </div>
    </div>
  );
};

export default FormVal;
