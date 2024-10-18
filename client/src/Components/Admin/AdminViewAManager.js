import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../apis/axiosinstance";
import AdminSidebar from "./AdminSidebar";

function AdminViewAManager() {
  const { managerid } = useParams();

  const getAData = () => {
    axiosInstance
      .get(`/view_a_manger/${managerid}`)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getAData();
  });

  return (
    <div className="row">
      <div className="col-2">
        <AdminSidebar />
      </div>
      <div className="col-6">
        <div>
          <img></img>
        </div>
      </div>
    </div>
  );
}

export default AdminViewAManager;
