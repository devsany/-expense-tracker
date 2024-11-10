import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Registration from "./components/auth-user/Registration";
import Home from "./components/Home";
import Login from "./components/auth-user/Login";
import UserHome from "./components/UserHome";
import UserIncome from "./components/UserIncome";
import ViewPrimaryIncome from "./components/ViewPrimaryIncome";
import UserSecondaryIncome from "./components/UserSecondaryIncome";
import ExpencesInput from "./components/expences/ExpencesInput";
import ViewExpendtureSection from "./components/expences/ViewExpendtureSection";
import Summary from "./components/Summary";
import Documentation from "./components/Documentation/Documentation";
import V1 from "./components/Documentation/View/V1";
import V2 from "./components/Documentation/View/V2";
import V3 from "./components/Documentation/View/V3";
import Setting from "./components/Setting";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav className="bg-white   border-b-2 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <NavLink
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="/Screenshot 2024-11-06 163048.png"
                  className="h-8 md:h-10 "
                  alt="Flowbite Logo"
                />
              </NavLink>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <NavLink
                      to="/"
                      className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/documentation"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      aria-current="page"
                    >
                      Documentation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/registration"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Registration
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Login
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink
                      to="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Pricing
                    </NavLink>
                  </li> */}
                  {/* <li>
                    <NavLink
                      to="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Contact
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
          {/*  */}
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/login">Login</NavLink> */}
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
          <Route path="/home/:id/input_expencess" element={<ExpencesInput />} />
          <Route
            path="/home/:id/view_expencess"
            element={<ViewExpendtureSection />}
          />
          <Route path="/home/:id/setting" element={<Setting />} />
          <Route path="/documentation" element={<Documentation />} />

          {/* view documentation section */}
          <Route path="/documentation/v1" element={<V1 />} />
          <Route path="/documentation/v2" element={<V2 />} />
          <Route path="/documentation/v3" element={<V3 />} />

          <Route path="/home/:id/view_summary" element={<Summary />} />
          {/* /home/${id}/Income */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
