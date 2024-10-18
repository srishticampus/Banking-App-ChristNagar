import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "../../Asserts/Styles/admindashboard.css";
import axiosInstance from "../../apis/axiosinstance";
import { Link } from "react-router-dom";
import imgURL from "../../apis/imgURL";

function AdminviewManagers() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosInstance
      .get("/viewallmangers")
      .then((res) => {
        setManagers(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const togglemanagersStatus = (id, currentStatus) => {
    const endpoint = currentStatus
      ? "/inactivatemanagers/"
      : "/activatemanagers/";
    axiosInstance
      .post(endpoint + id)
      .then((res) => {
        if (res.status === 200) {
          let msg =
            res?.data?.message ||
            `managers is now ${currentStatus ? "Inactive" : "Active"}`;
          alert(msg);
          getData();
          setManagers((prevState) =>
            prevState.map((manager) =>
              manager._id === id
                ? { ...manager, ActiveStatus: !currentStatus }
                : manager
            )
          );
        } else {
          console.log("Error on status change");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <AdminSidebar />
        </div>
        <div className="col-9" id="common">
          <h3 className="mt-4 mb-3">
            <span className="dashboardheadcolor">VIEW</span> MANAGERS
          </h3>
          <div className="container">
            <div className="row">
              {managers.map((manager, index) => (
                <div key={manager._id} className="col-md-6 mb-4">
                  <div className="card bg-light" id="card1">
                    <div className="row no-gutters" id="c1">
                      <div className="col-4">
                        <img
                          src={`${imgURL}/${manager.profile.filename}`}
                          width="100%"
                          height="200px"
                          className="img"
                          alt="Manager"
                        />
                      </div>
                      <div className="col-8 pt-4 pd-3">
                        <h6>{manager.name}</h6>
                        <p>{manager.destination}</p>
                        <p>{manager.email}</p>
                        <p>+{manager.contact}</p>
                        <small>
                          <Link
                            to={`/admin/view_a_managers/${manager._id}`}
                            id="details"
                          >
                            View details
                          </Link>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminviewManagers;
