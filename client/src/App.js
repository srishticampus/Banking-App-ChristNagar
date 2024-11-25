import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/User/UserLogin";
import LandingNav from "./Components/Main/LandingNav";
import LandingPage from "./Components/Main/LandingPage";
import AdminLogin from "./Components/Admin/AdminLogin";
import LandingFooter from "./Components/Main/LandingFooter";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AdminviewManagers from "./Components/Admin/AdminviewManagers";
import AdminAddManagers from "./Components/Admin/AdminAddManagers";
import AdminViewAManager from "./Components/Admin/AdminViewAManager";
import AdminEditAmanagerData from "./Components/Admin/AdminEditAmanagerData";
import UserRegister from "./Components/User/UserRegister";
import ManagerLogin from "./Components/Manager/ManagerLogin";
import UserHomePage from "./Components/User/UserHomePage";
import UserSentForgotpswd from "./Components/User/UserSentForgotpswd";
import UserForgotmailAccept from "./Components/User/UserForgotmailAccept";
import ManagerHome from "./Components/Manager/ManagerHome";
import ManagerProfile from "./Components/Manager/ManagerProfile";
import ManagerEditProfile from "./Components/Manager/ManagerEditProfile";
import ManagerViewUsers from "./Components/Manager/ManagerViewUsers";
import ManagerAddClerk from "./Components/Manager/ManagerAddClerk";
import AdminViewClerks from "./Components/Admin/AdminViewClerks";
import ManagerViewUserDetails from "./Components/Manager/ManagerViewUserDetails";

function App() {
  return (
    <BrowserRouter basename="/bank_app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/adminlogin"
          element={[<LandingNav />, <AdminLogin />, <LandingFooter />]}
        />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/viewmanages" element={<AdminviewManagers />} />
        <Route path="/admin/addmanagers" element={<AdminAddManagers />} />
        <Route path="/admin/view_a_managers/:managerid" element={<AdminViewAManager />} />
        <Route path="/admin/edit_a_managers/:managerid" element={<AdminEditAmanagerData />} />
        <Route path="/admin/viewclerks" element={<AdminViewClerks />} />


        <Route path="/manager/login" element={<ManagerLogin/>} />
        <Route path="/manager/home" element={<ManagerHome/>} />
        <Route path="/manager/profile" element={<ManagerProfile/>} />
        <Route path="/manager/editprofile" element={<ManagerEditProfile/>} />
        <Route path="/manager/viewusers" element={<ManagerViewUsers/>} />
        <Route path="/manager/addClerk" element={<ManagerAddClerk/>} />
        <Route path="/manager/viewuserdetails/:userid" element={<ManagerViewUserDetails/>} />

        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/homepage" element={<UserHomePage/>} />
        <Route path="/user/forgot" element={<UserSentForgotpswd/>} />
        <Route path="/reset-password/:id" element={<UserForgotmailAccept/>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
