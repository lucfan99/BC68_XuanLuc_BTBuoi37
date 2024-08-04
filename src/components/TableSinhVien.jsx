import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "MSSV",
    dataIndex: "masv",
    key: "name",
  },
  {
    title: "Tên sinh viên",
    dataIndex: "hoten",
    key: "hoten",
  },
  {
    title: "Số điện thoại",
    dataIndex: "sodienthoai",
    key: "sodienthoai",
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Action",
    render: () => {
      return (
        <>
          <button className=" py-2 px-5 rounded-md text-white bg-red-500">
            Xóa
          </button>
          <button className=" py-2 px-5 rounded-md text-white bg-yellow-500 ml-3   ">
            Sửa
          </button>
        </>
      );
    },
  },
];

const TableSinhVien = ({ arrSinhVien }) => {
  return <Table columns={columns} dataSource={arrSinhVien} />;
};

export default TableSinhVien;
