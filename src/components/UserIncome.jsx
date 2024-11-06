import {
  get,
  getDatabase,
  push,
  ref,
  serverTimestamp,
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import app from "../firebase/firebaseConfig";
import { Settings, User } from "lucide-react";

const UserIncome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const { id } = useParams();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdownexpenses = () => {
    setIsOpen1(!isOpen1);
  };
  console.log(id);
  const [pri, setPri] = useState(true);
  const [data, setData] = useState([]);
  const [sec, setSec] = useState(false);
  const [userKey, setUserKey] = useState("");
  const [primaryError, setPrimaryError] = useState({});
  const [secondaryError, setSecondaryError] = useState({});
  const [primaryIncomeData, setPrimaryIncomeData] = useState({
    type: "",
    date: "",
    description: "",
    amount: "",
  });

  const [secondaryIncomeData, setSecondaryIncomeData] = useState({
    type: "",
    date: "",
    category: "",
    description: "",
    amount: "",
  });
  const [options, setOptions] = useState("");

  //   const modeOfIncomeKeys = Object.keys(data[0].modeOfIncome);
  //   const modeOfIncomeValues = Object.values(data[0].modeOfIncome);

  //   modeOfIncomeKeys.forEach((key) => {
  //     console.log("Key:", key); // Prints each key (e.g., -OAwHLQVKO0tXsUDagvW)
  //     console.log("Value:", data[0].modeOfIncome[key]); // Accesses the corresponding value
  //   });

  //   modeOfIncomeValues.forEach((item) => {
  //     console.log("Mode:", item.mode); // Prints each mode value (e.g., "apple shop")
  //   });

  const handlePrimaryIncome = () => {
    setPri(!pri);
    setSec(false);
  };
  const handleSecondaryIncome = () => {
    setSec(!sec);
    setPri(false);
  };

  const fetchDataForOption = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, `user/datas/${userKey}/modeOfIncome`);
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      setData(
        Object.values(snapshot.val())
        // .filter((item) => {
        //   return item.token === id;
        // })
      );
      console.log(Object.values(snapshot.val()));
    } else {
      alert("Do you want to allow the option for Income");
    }
  };
  console.log(data);
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
  const handlePrimaryIncomeData = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const error = {};
    // type: "",
    // date: "",
    // description: "",
    // amount: "",
    if (!primaryIncomeData.type) {
      error.type = "Required";
    } else if (!primaryIncomeData.date) {
      error.date = "required";
    } else if (!primaryIncomeData.description) {
      error.description = "required";
    } else if (!primaryIncomeData) {
      error.amount = "required";
    } else {
      const db = getDatabase(app);

      const postsRef = ref(db, `user/datas/${userKey}/primaryIncome`); // Adjust the reference according to your structure

      // Push form data to Firebase
      push(postsRef, {
        type: primaryIncomeData.type,
        date: primaryIncomeData.date,
        description: primaryIncomeData.description,
        amount: primaryIncomeData.amount,
        timestamp: serverTimestamp(),
        option: options,
      })
        .then(() => {
          console.log("Data pushed successfully!");
          // Clear the form after submission
          alert("data is pushed");
        })
        .catch((error) => {
          console.error("Error pushing data:", error);
        });
    }
    setPrimaryError(error);
  };
  const handleSecondaryIncomeData = async (e) => {
    e.preventDefault(); // Prevent page refresh
    // const error = {};
    // // type: "",
    // // date: "",
    // // category: "",
    // // description: "",
    // // amount: "",
    // if (!primaryIncomeData.type) {
    //   error.type = "Required";
    // } else if (!primaryIncomeData.date) {
    //   error.date = "required";
    // } else if (!primaryIncomeData.description) {
    //   error.description = "required";
    // } else if (!primaryIncomeData) {
    //   error.amount = "required";
    // } else {
    const db = getDatabase(app);
    const postsRef = ref(db, `user/datas/${userKey}/seconderyIncome`); // Adjust the reference according to your structure

    // Push form data to Firebase
    push(postsRef, {
      type: secondaryIncomeData.type,
      date: secondaryIncomeData.date,
      category: secondaryIncomeData.category,
      description: secondaryIncomeData.description,
      amount: secondaryIncomeData.amount,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        console.log("Data pushed successfully!");
        // Clear the form after submission
        alert("data is pushed");
      })
      .catch((error) => {
        console.error("Error pushing data:", error);
      });
    // }
    // setSecondaryError(error);
    //   id: `post${postsArray.length + 1}`, // Generate a unique ID
    //   type: primaryIncomeData.type,
    //   date: primaryIncomeData.date,
    //   category: primaryIncomeData.category,
    //   description: primaryIncomeData.description,
    //   amount: primaryIncomeData.amount,
    //   timestamp: serverTimestamp(),
  };
  console.log(userKey);
  useEffect(() => {
    fetchData();
    fetchDataForOption();
  });
  return (
    <div>
      <div className=" ">
        {/* custome navbar */}

        <aside
          id="sidebar-multi-level-sidebar"
          className="fixed   left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
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
                      <span className="ms-3">Primary Income Anylysis</span>
                    </NavLink>
                  </li>
                  <li>
                    <li>
                      <NavLink
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        to={`/home/${id}/viewSecondaryIncome`}
                      >
                        <span className="ms-3">Secondary Income Anylysis</span>
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
                      <span className="ms-3">Daily Expendture</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      to={`/home/${id}/view_expencess`}
                    >
                      <span className="ms-3"> View Expendture</span>
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
            <div className=" ">
              <div className="flex">
                <div
                  className="border p-4 m-4 cursor-pointer hover:bg-green-200 transition duration-200"
                  onClick={handlePrimaryIncome}
                >
                  Primary Income
                </div>
                <div
                  className="border p-4 m-4 cursor-pointer hover:bg-blue-200 transition duration-200"
                  onClick={handleSecondaryIncome}
                >
                  Secondary Income
                </div>
              </div>
              {pri && (
                <div>
                  <form action="" onSubmit={handlePrimaryIncomeData}>
                    <label htmlFor="type">Source of income</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter source of Income"
                      value={primaryIncomeData.type}
                      onChange={(e) =>
                        setPrimaryIncomeData({
                          ...primaryIncomeData,
                          type: e.target.value,
                        })
                      }
                    />
                    {primaryError && (
                      <div className="text-red-400">{primaryError.type}</div>
                    )}
                    <label htmlFor="date">Date</label>
                    <input
                      required
                      type="date"
                      placeholder="Source income date"
                      value={primaryIncomeData.date}
                      onChange={(e) =>
                        setPrimaryIncomeData({
                          ...primaryIncomeData,
                          date: e.target.value,
                        })
                      }
                    />
                    {primaryError && (
                      <div className="text-red-400">{primaryError.date}</div>
                    )}

                    <label htmlFor="description">Enter Description</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter Description"
                      value={primaryIncomeData.description}
                      onChange={(e) =>
                        setPrimaryIncomeData({
                          ...primaryIncomeData,
                          description: e.target.value,
                        })
                      }
                    />
                    {primaryError && (
                      <div className="text-red-400">
                        {primaryError.description}
                      </div>
                    )}

                    <label htmlFor="amount">Amount</label>
                    <input
                      required
                      type="number"
                      placeholder="Enter amount"
                      value={primaryIncomeData.amount}
                      onChange={(e) =>
                        setPrimaryIncomeData({
                          ...primaryIncomeData,
                          amount: e.target.value,
                        })
                      }
                    />
                    {primaryError && (
                      <div className="text-red-400">{primaryError.amount}</div>
                    )}
                    <select
                      name="mode"
                      id="mode"
                      onChange={(e) => setOptions(e.target.value)}
                    >
                      <option value="">Select mode of Income</option>
                      {data.map((item, index) => {
                        return (
                          <>
                            {/* {item.modeOfIncome.map((item, index) => {
                          return (
                            <> */}
                            <option value={item.mode}>{item.mode}</option>
                            {/* </>
                          );
                        })} */}
                          </>
                        );
                      })}
                    </select>
                    <button type="submit">Submit</button>
                  </form>
                </div>
              )}

              {sec && (
                <div>
                  <div>
                    <form action="" onSubmit={handleSecondaryIncomeData}>
                      <label htmlFor="type">Source of income</label>
                      <input
                        required
                        type="text"
                        placeholder="Enter source of Income"
                        value={secondaryIncomeData.type}
                        onChange={(e) =>
                          setSecondaryIncomeData({
                            ...secondaryIncomeData,
                            type: e.target.value,
                          })
                        }
                      />
                      {/* {secondaryError && (
                    <div className="text-red-500">{secondaryError.type}</div>
                  )} */}
                      <label htmlFor="date">Date</label>
                      <input
                        required
                        type="date"
                        placeholder="Source income date"
                        value={secondaryIncomeData.date}
                        onChange={(e) =>
                          setSecondaryIncomeData({
                            ...secondaryIncomeData,
                            date: e.target.value,
                          })
                        }
                      />
                      {/* {secondaryError && (
                    <div className="text-red-500">{secondaryError.date}</div>
                  )} */}

                      <label htmlFor="category">Category</label>
                      <input
                        required
                        type="text"
                        placeholder="Enter Category"
                        value={secondaryIncomeData.category}
                        onChange={(e) =>
                          setSecondaryIncomeData({
                            ...secondaryIncomeData,
                            category: e.target.value,
                          })
                        }
                      />
                      {/* {secondaryError && (
                    <div className="text-red-500">
                      {secondaryError.category}
                    </div>
                  )} */}

                      <label htmlFor="description">Enter Description</label>
                      <input
                        required
                        type="text"
                        placeholder="Enter Description"
                        value={secondaryIncomeData.description}
                        onChange={(e) =>
                          setSecondaryIncomeData({
                            ...secondaryIncomeData,
                            description: e.target.value,
                          })
                        }
                      />
                      {/* {secondaryError && (
                    <div className="text-red-500">
                      {secondaryError.description}
                    </div>
                  )} */}

                      <label htmlFor="amount">Amount</label>
                      <input
                        required
                        type="number"
                        placeholder="Enter amount"
                        value={secondaryIncomeData.amount}
                        onChange={(e) =>
                          setSecondaryIncomeData({
                            ...secondaryIncomeData,
                            amount: e.target.value,
                          })
                        }
                      />
                      {/* {secondaryError && (
                    <div className="text-red-500">{secondaryError.amount}</div>
                  )} */}

                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserIncome;
