import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Registration from "./components/auth-user/Registration";
import Home from "./components/Home";
import Login from "./components/auth-user/Login";
import UserHome from "./components/UserHome";
import UserIncome from "./components/UserIncome";
import ViewPrimaryIncome from "./components/ViewPrimaryIncome";
import UserSecondaryIncome from "./components/UserSecondaryIncome";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home/:id" element={<UserHome />} />
          <Route path="/home/:id/Income" element={<UserIncome />} />
          <Route
            path="/home/:id/viewPrimaryIncome"
            element={<ViewPrimaryIncome />}
          />
          <Route
            path="/home/:id/viewSecondaryIncome"
            element={<UserSecondaryIncome />}
          />
          {/* /home/${id}/Income */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
