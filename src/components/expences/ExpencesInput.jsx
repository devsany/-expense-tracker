import {
  get,
  getDatabase,
  push,
  ref,
  serverTimestamp,
} from "firebase/database";
import { Settings, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import app from "../../firebase/firebaseConfig";

const ExpencesInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const { id } = useParams();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("clicked");
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdownexpenses = () => {
    setIsOpen1(!isOpen1);
  };
  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(false);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [offlineMode, setOfflineMode] = useState("");
  const [onlineMode, setOnlineMode] = useState("");
  const [userKey, setUserKey] = useState("");

  //handle offline
  const handleOffline = () => {
    setOnline(false);
    setOffline(true);
    setOfflineMode("offlineMode");
    setOnlineMode("");
  };

  //handleonline
  const handleOnline = () => {
    setOffline(false);
    setOnline(true);
  };

  //handleSubmit
  const handleSubmit = (e) => {
    const db = getDatabase(app);
    const postsRef = ref(db, `user/datas/${userKey}/expendture`); // Adjust the reference according to your structure

    // Push form data to Firebase
    push(postsRef, {
      amount: amount,
      date: date,
      description: description,
      modeOffline: offlineMode,
      onlineMode: onlineMode,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        // Clear the form after submission
        alert("data is pushed");
      })
      .catch((error) => {
        console.error("Error pushing data:", error);
      });
  };
  //hanlde fetch tate initial
  const fetchData = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, `user/datas`);
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const entries = Object.entries(snapshot.val());

      console.log("entries", entries);

      // Find the entry where name is "token as id"
      const foundEntry = entries.find(([key, value]) => value.token === id);
      if (foundEntry) {
        const [key, userData] = foundEntry;
        setUserKey(key); // Output: user1 (or whatever the key is)
        console.log(key);
      } else {
        console.log("John Doe not found");
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className=" ">
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          aria-expanded="false" // Will be set to true when sidebar is open
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Open sidebar</span>
          {isSidebarOpen ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 transform  rotate-45"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </>
          )}
        </button>
        {/* custome navbar */}

        <aside
          id="sidebar-multi-level-sidebar"
          className={` fixed left-0 z-40 w-64 h-screen transition-transform  ${
            isSidebarOpen ? " -translate-x-full" : " -translate-x-0"
          }  sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  to={`/home/${id}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                  </svg>

                  <span className="ms-3">User Profile</span>
                </NavLink>
              </li>
              <li>
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.577 4.878a.75.75 0 0 1 .919-.53l4.78 1.281a.75.75 0 0 1 .531.919l-1.281 4.78a.75.75 0 0 1-1.449-.387l.81-3.022a19.407 19.407 0 0 0-5.594 5.203.75.75 0 0 1-1.139.093L7 10.06l-4.72 4.72a.75.75 0 0 1-1.06-1.061l5.25-5.25a.75.75 0 0 1 1.06 0l3.074 3.073a20.923 20.923 0 0 1 5.545-4.931l-3.042-.815a.75.75 0 0 1-.53-.919Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Income Categories
                  </span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <ul
                  id="dropdown-example"
                  className={`overflow-hidden text-sm ml-2 transition-all duration-300 ease-in-out ${
                    isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
                  }`}
                >
                  <li>
                    <NavLink
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      to={`/home/${id}/Income`}
                    >
                      <span className="ms-3">Income</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      to={`/home/${id}/viewPrimaryIncome`}
                    >
                      <span className="ms-3">Primary Income analysis</span>
                    </NavLink>
                  </li>
                  <li>
                    <li>
                      <NavLink
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        to={`/home/${id}/viewSecondaryIncome`}
                      >
                        <span className="ms-3">Secondary Income analysis</span>
                      </NavLink>
                    </li>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  onClick={toggleDropdownexpenses}
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path d="m13.28 7.78 3.22-3.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 0 0 1.06 1.06ZM2 17.25v-4.5a.75.75 0 0 1 1.5 0v2.69l3.22-3.22a.75.75 0 0 1 1.06 1.06L4.56 16.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.747.747 0 0 1-.75-.75ZM12.22 13.28l3.22 3.22h-2.69a.75.75 0 0 0 0 1.5h4.5a.747.747 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69l-3.22-3.22a.75.75 0 1 0-1.06 1.06ZM3.5 4.56l3.22 3.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0V4.56Z" />
                  </svg>

                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Expenses
                  </span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                      isOpen1 ? "rotate-90" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <ul
                  id="dropdown-example"
                  className={`overflow-hidden text-sm   ml-2 transition-all duration-300 ease-in-out ${
                    isOpen1 ? "h-auto opacity-100" : "h-0 opacity-0"
                  }`}
                >
                  <li>
                    <NavLink
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      to={`/home/${id}/input_expencess`}
                    >
                      <span className="ms-3">Daily Expenditure</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      to={`/home/${id}/view_expencess`}
                    >
                      <span className="ms-3"> View Expenditure</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  to={`/home/${id}/view_summary`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path d="M1 4.25a3.733 3.733 0 0 1 2.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0 0 16.75 2H3.25A2.25 2.25 0 0 0 1 4.25ZM1 7.25a3.733 3.733 0 0 1 2.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0 0 16.75 5H3.25A2.25 2.25 0 0 0 1 7.25ZM7 8a1 1 0 0 1 1 1 2 2 0 1 0 4 0 1 1 0 0 1 1-1h3.75A2.25 2.25 0 0 1 19 10.25v5.5A2.25 2.25 0 0 1 16.75 18H3.25A2.25 2.25 0 0 1 1 15.75v-5.5A2.25 2.25 0 0 1 3.25 8H7Z" />
                  </svg>

                  <span className="ms-3"> Summary</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  to={`/home/${id}/setting`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.5 10a4.5 4.5 0 0 0 4.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 0 1-.493.11 3.01 3.01 0 0 1-1.618-1.616.455.455 0 0 1 .11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 0 0-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 1 0 3.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01ZM5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                      clip-rule="evenodd"
                    />
                    <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 0 1-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012ZM6 4.586l2.33 2.33a.452.452 0 0 1-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 0 1-.447-.276l-1.7-3.402a.5.5 0 0 1 .093-.577l.49-.49a.5.5 0 0 1 .577-.094l3.402 1.7A.5.5 0 0 1 6 3.31v1.277Z" />
                  </svg>

                  <span className="ms-3">Setting</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  to={`/home`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="ms-3">F&Q</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  to={`/home`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.75 6h-2v4.25a.75.75 0 0 1-1.5 0V6h1.5V3.704l.943 1.048a.75.75 0 0 0 1.114-1.004l-2.25-2.5a.75.75 0 0 0-1.114 0l-2.25 2.5a.75.75 0 0 0 1.114 1.004l.943-1.048V6h-2A2.25 2.25 0 0 0 3 8.25v4.5A2.25 2.25 0 0 0 5.25 15h5.5A2.25 2.25 0 0 0 13 12.75v-4.5A2.25 2.25 0 0 0 10.75 6ZM7 16.75v-.25h3.75a3.75 3.75 0 0 0 3.75-3.75V10h.25A2.25 2.25 0 0 1 17 12.25v4.5A2.25 2.25 0 0 1 14.75 19h-5.5A2.25 2.25 0 0 1 7 16.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="ms-3">Log Out</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64 ">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <form action="" onSubmit={handleSubmit}>
              <span className="text-lg border-l-2  pl-2  text-gray-500 dark:text-gray-400">
                Expendture Detail
              </span>
              <div class="relative">
                <input
                  required
                  type="number"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  class="block px-2.5  mb-3 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Amount
                </label>
              </div>
              <div class="relative">
                <input
                  required
                  type="text"
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  class="block px-2.5  mb-3 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Description
                </label>
              </div>
              <div class="relative">
                <input
                  required
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  class="block px-2.5  mb-3 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Date
                </label>
              </div>

              <div className="font-semibold">Payment Method</div>
              <div className="flex ">
                <div className=" mt-3 mb-3 " onClick={handleOffline}>
                  <span className="py-2.5 ml-2 shadow-sm cursor-pointer px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-300 rounded-lg border border-gray-200 hover:bg-green-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Offline
                  </span>
                </div>
                <div className=" mt-3 mb-3 " onClick={handleOnline}>
                  <span className="py-2.5 ml-2 shadow-sm cursor-pointer px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-orange-300 rounded-lg border border-gray-200 hover:bg-green-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Online
                  </span>
                </div>
              </div>
              <div>
                {offline && (
                  <div className="font-semibold text-sm mt-2 mb-2 ml-2 p-4 border rounded-md">
                    offline payment
                  </div>
                )}
              </div>
              <div>
                {online && (
                  <div>
                    <span className="font-semibold text-sm ml-2">
                      Enter Online pin or card number so that you may remember
                    </span>
                    <div class="relative">
                      <input
                        required
                        type="text"
                        id="online"
                        name="online"
                        value={onlineMode}
                        onChange={(e) => setOnlineMode(e.target.value)}
                        class="block px-2.5 ml-2 mt-2 mb-2 mb-3 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        for="floating_outlined"
                        class="absolute text-sm ml-2  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >
                        Enter Online pin
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <button type="submit">
                <div className=" mt-3 mb-3 " onClick={handleOnline}>
                  <span className="py-2.5  shadow-sm cursor-pointer px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-purple-300 rounded-lg border border-gray-200 hover:bg-green-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Submit
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpencesInput;
