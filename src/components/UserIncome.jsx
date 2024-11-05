import {
  get,
  getDatabase,
  push,
  ref,
  serverTimestamp,
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app from "../firebase/firebaseConfig";

const UserIncome = () => {
  const { id } = useParams();
  console.log(id);
  const [pri, setPri] = useState(true);
  const [sec, setSec] = useState(false);
  const [userKey, setUserKey] = useState("");
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
  const handlePrimaryIncome = () => {
    setPri(!pri);
    setSec(false);
  };
  const handleSecondaryIncome = () => {
    setSec(!sec);
    setPri(false);
  };
  const fetchData = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "user/datas");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const entries = Object.entries(snapshot.val());
      console.log("entries", entries);
      // Find the entry where name is "token as id"
      const foundEntry = entries.find(([key, value]) => value.token === id);
      if (foundEntry) {
        const [key, userData] = foundEntry;
        setUserKey(key); // Output: user1 (or whatever the key is)
      } else {
        console.log("John Doe not found");
      }
    }
  };
  const handlePrimaryIncomeData = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const db = getDatabase(app);
    const postsRef = ref(db, `user/datas/${userKey}/primaryIncome`); // Adjust the reference according to your structure

    // Push form data to Firebase
    push(postsRef, {
      type: primaryIncomeData.type,
      date: primaryIncomeData.date,
      description: primaryIncomeData.description,
      amount: primaryIncomeData.amount,
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
    //   id: `post${postsArray.length + 1}`, // Generate a unique ID
    //   type: primaryIncomeData.type,
    //   date: primaryIncomeData.date,
    //   category: primaryIncomeData.category,
    //   description: primaryIncomeData.description,
    //   amount: primaryIncomeData.amount,
    //   timestamp: serverTimestamp(),
  };
  const handleSecondaryIncomeData = async (e) => {
    e.preventDefault(); // Prevent page refresh
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
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3">
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
            <label htmlFor="date">Date</label>
            <input
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

            <label htmlFor="description">Enter Description</label>
            <input
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
            <label htmlFor="amount">Amount</label>
            <input
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
              <label htmlFor="date">Date</label>
              <input
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
              <label htmlFor="category">Category</label>
              <input
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
              <label htmlFor="description">Enter Description</label>
              <input
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
              <label htmlFor="amount">Amount</label>
              <input
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
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserIncome;
