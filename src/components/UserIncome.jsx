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
  const { id } = useParams();
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
      <div className="grid border grid-cols-12">
        <div className="border col-span-2">
          <div className="flex justify-between">
            <div>
              <NavLink to={`/home/${id}`}>
                User Detail <User className=" cursor-pointer" />{" "}
              </NavLink>
            </div>
          </div>
          <div className="flex justify-between">
            Setting
            <Settings className="transform hover:rotate-30 transition duration-300 cursor-pointer" />{" "}
          </div>
          <div>
            <NavLink to={`/home/${id}/Income`}>Income</NavLink>
          </div>
          <div>
            <NavLink to={`/home/${id}/viewPrimaryIncome`}>
              Primary Income
            </NavLink>
          </div>
          <div>
            <NavLink to={`/home/${id}/viewSecondaryIncome`}>
              Secondary Income
            </NavLink>
          </div>
          <div>
            <NavLink to={`/home/${id}/input_expencess`}>
              Expendture section
            </NavLink>
          </div>
          <div>
            <NavLink to={`/home/${id}/view_expencess`}>
              Anylise Expencess section
            </NavLink>
          </div>
          <div>
            <NavLink to={`/home/${id}/view_summary`}>Summary</NavLink>
          </div>
          {/* "/home/:id/viewPrimaryIncome" */}
        </div>
        <div className="border col-span-10">
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
                  <div className="text-red-400">{primaryError.description}</div>
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
  );
};

export default UserIncome;
