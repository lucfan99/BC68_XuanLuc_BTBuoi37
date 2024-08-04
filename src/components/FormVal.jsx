import React, { useState } from "react";
import { useFormik } from "formik";
import TableSinhVien from "./TableSinhVien";
const FormVal = () => {
  // const [values, setValues] = useState("");
  const [arrSinhVien, setArrSinhVien] = useState([]);
  const {
    values,
    handleSubmit,
    resetForm,
    handleChange,
    // setFieldValue,
    handleReset,
  } = useFormik({
    //lưu trữ dữ liệu cho các input
    initialValues: {
      masv: "",
      hoten: "",
      sodienthoai: "",
      email: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setArrSinhVien([...arrSinhVien, values]);
      resetForm();
    },
  });
  console.log(arrSinhVien);
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
                  className=" bg-gray-50 border border-black  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Nhập mã số sinh viên"
                  name="masv"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Họ Tên
                </label>
                <input
                  type="text"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Nhập họ tên"
                  name="hoten"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Nhập số điện thoại"
                  name="sodienthoai"
                  onChange={handleChange}
                />
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
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-md bg-green-600 text-white px-2 py-3"
                >
                  Thêm sinh viên
                </button>
              </div>
            </div>
          </form>
        </div>
        <TableSinhVien arrSinhVien={arrSinhVien} />
      </div>
    </div>
  );
};

export default FormVal;
