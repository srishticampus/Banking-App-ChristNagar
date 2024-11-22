import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { IoEye } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import "../../Asserts/Styles/manager.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import ManagerSidebar from "./ManagerSidebar";
import axiosInstance from "../../apis/axiosinstance";
import Table from "react-bootstrap/Table";

function ManagerViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosInstance
      .get("/viewusers")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="row">
      <div className="col-3">
        <ManagerSidebar />
      </div>
      <div className="container col-8">
        <h3 className="mt-4">
          <span id="view">VIEW</span> USERS
        </h3>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3">
            {" "}
            <Form className="searchbar1">
              <Form.Control
                type="search"
                placeholder="Search Here... "
                className="me-2 searchbar"
                aria-label="Search"
              />{" "}
            </Form>
          </div>
        </div>
        <div className="row mt-4">
        <div className="col-6">
        <Table striped bordered hover>
            <thead >
              <tr >
                <th id="tableth">S/No</th>
                <th id="tableth">Name</th>
                <th id="tableth">Phone Number</th>
                <th id="tableth">Address</th>
                <th id="tableth">Account No</th>
                <th id="tableth">IFSC Code</th>
                <th id="tableth">Balance</th>
                <th id="tableth">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((data, index) => (
                <tr key={index}>
                  <td className="">{index + 1}</td>
                  <td className="">{data.username}</td>
                  <td className="">{data.userContact}</td>
                  <td className="">{data.userAddress}</td>
                  <td className="">{data.username} </td>
                  <td className="">{data.username}</td>
                  <td className="">{data.username}</td>
                  <td className="">Action</td>
                </tr>
              ))}
            </tbody>
          </Table></div>
          <div>cd c </div>
          
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default ManagerViewUsers;
