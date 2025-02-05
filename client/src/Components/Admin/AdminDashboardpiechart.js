import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axiosInstance from "../../apis/axiosinstance";
import { IoEye } from "react-icons/io5";
import { Link ,useNavigate} from "react-router-dom";
import eye from "../../Asserts/images/eyebutton.png";
import Table from "react-bootstrap/Table";


// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardCharts = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    getData();
  }, []);

  // Fetch users from the backend
  const getData = async () => {
    try {
      const res = await axiosInstance.get("/viewusers");
      setUsers(res.data.data);
      setFilteredUsers(res.data.data); // Initialize filteredUsers with the full user list
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  // Toggle user status between active and inactive
  

  // Handle search functionality


  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredUsers.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const navigate=useNavigate()
  
  useEffect(()=>{
    if(localStorage.getItem("admin")==null){
      navigate("/adminlogin")
    }
  },[])
  const [usersCount, setUsersCount] = useState(0);
  const [userlistdata, setuserdata] = useState([]);
  const [managersCount, setManagersCount] = useState(0);
  const [clerksCount, setClerksCount] = useState(0);
  const [loanData, setLoanData] = useState({
    total: 0,
    rejected: 0,
    pending: 0,
  });

  const userdata = () => {
    axiosInstance.get("/viewusers").then((result) => {
      setuserdata(result.data.data);
    });
  };

  // Fetch data from backend APIs
  useEffect(() => {
    userdata();
    const fetchData = async () => {
      try {
        const usersRes = await axiosInstance.get("/viewusers");
        console.log(usersRes, "l");

        setUsersCount(usersRes.data.data.length);

        const managersRes = await axiosInstance.get("/viewallmangers");
        setManagersCount(managersRes.data.data.length);

        const clerksRes = await axiosInstance.get("/viewallclerks");
        setClerksCount(clerksRes.data.data.length);

        const loanRes = await axiosInstance.get("/viewallloan");
        const loans = loanRes.data;
        console.log(loans, "p");

        const rejected = loans.data.filter(
          (loan) => loan.loanapproval === "Rejected"
        ).length;
        const pending = loans.data.filter(
          (loan) => loan.loanapproval === "Pending"
        ).length;
        const total = loans.data.length;
        setLoanData({ total, rejected, pending });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Data for Users Review Pie Chart
  const usersReviewData = {
    labels: ["Total no of Users", "Total no of Clerks", "Total no of Managers"],
    datasets: [
      {
        data: [usersCount, clerksCount, managersCount],
        backgroundColor: ["#9b59b6", "#3498db", "#1abc9c"],
        borderColor: ["#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  // Data for Loan Pie Chart
  const loanDataChart = {
    labels: ["Total Loans", "Rejected Loans", "Pending Loans"],
    datasets: [
      {
        data: [loanData.total, loanData.rejected, loanData.pending],
        backgroundColor: ["#27ae60", "#e74c3c", "#f1c40f"],
        borderColor: ["#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="row ms-5 mt-5">
        <div className="col-5 managerDashboardpiechart">
          <h3>Users Review</h3>
          <div>
            <Pie data={usersReviewData} />
          </div>
        </div>

        <div className="col-5 ms-5 managerDashboardpiechart1">
          <div className="row">
            <div className="col-3">
              <button className="btn ms-4" id="managerDashboardLoanButton">
                Loan
              </button>
            </div>
            <div className="col-4">
              <button className="btn" id="managerDashboardLoanButton">
                Credit Card
              </button>
            </div>
            <div className="col-5">
              <button className="btn" id="managerDashboardLoanButton">
                Life Insurance
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>
                <Pie data={loanDataChart} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col managerDashboardviewuser">
        <h4>View Users</h4>
      </div>
      <div className="mt-4">
          <Table striped bordered hover className="user-table">
            <thead>
              <tr>
                <th id="th">S/No</th>
                <th id="th">Name</th>
                <th id="th">Phone Number</th>
                <th id="th">Account No</th>
                <th id="th">IFSC Code</th>
                <th id="th">Balance</th>
                <th id="th">Transaction History</th>
                <th id="th">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((data, index) => (
                <tr key={data._id}>
                  <td>{indexOfFirstRow + index + 1}</td>
                  <td>{data.username}</td>
                  <td>{data.userContact}</td>
                  <td>{data.userNumber}</td>
                  <td>{data.userCode}</td>
                  <td>{data.userBalance}</td>
                  <td><Link to={`/admin/transactionhistory/${data._id}`}>View Details</Link></td>
                  <td>
                  <Link to={`/admin/viewuserdetails/${data._id}`}><img src={eye} alt="View Details" ></img></Link>
                    
                  </td>

                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Pagination */}
        <nav aria-label="Page navigation example" className="mt-3">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                &laquo;
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                className={`page-item ${
                  currentPage === i + 1 ? "active" : ""
                }`}
                key={i}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
     
    </div>
  );
};

export default DashboardCharts;
