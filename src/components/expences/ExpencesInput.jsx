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
  const { id } = useParams();
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
        <div className="col-span-7">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="amount">Amount</label>
              <input
                required
                type="number"
                placeholder="Enter amount"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                required
                type="text"
                placeholder="Enter description"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                required
                type="date"
                placeholder="Enter Date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>Payment Method</div>
            <div className="flex ">
              <div
                className="ml-4 mr-4 border cursor-pointer"
                onClick={handleOffline}
              >
                Offline
              </div>
              <div
                className="ml-4 mr-4  border cursor-pointer"
                onClick={handleOnline}
              >
                Online
              </div>
            </div>
            <div>{offline && <div>offline payment</div>}</div>
            <div>
              {online && (
                <div>
                  <label htmlFor="online">
                    Enter Online pin or card number so that you may remember
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter UPI pin"
                    id="online"
                    name="online"
                    value={onlineMode}
                    onChange={(e) => setOnlineMode(e.target.value)}
                  />
                </div>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpencesInput;
