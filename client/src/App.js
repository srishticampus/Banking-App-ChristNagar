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
function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
