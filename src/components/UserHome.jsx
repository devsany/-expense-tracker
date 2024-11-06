import { get, getDatabase, push, ref } from "firebase/database";
import { Settings, SquareBottomDashedScissors, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import app from "../firebase/firebaseConfig";

const UserHome = () => {
  const [data, setData] = useState([]);
  const [userKey, setUserKey] = useState("");
  const [modeItem, setModeItem] = useState([]);
  const [mode, setMode] = useState("");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const fetchData = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "user/datas");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const entries = Object.entries(snapshot.val());

      // Find the entry where name is "token as id"
      const foundEntry = entries.find(([key, value]) => value.token === id);
      if (foundEntry) {
        const [key, userData] = foundEntry;
        setUserKey(key); // Output: user1 (or whatever the key is)
      } else {
        console.log("Data found");
      }
    }
  };
  console.log(userKey);
  const fetchData1 = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, `user/datas/${userKey}`);
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const entries = Object.values(snapshot.val());
      setData(entries);

      // Find the entry where name is "token as id"
      // const foundEntry = entries.find(([key, value]) => value.token === id);
      // if (foundEntry) {
      //   const [key, userData] = foundEntry;
      //   setUserKey(key); // Output: user1 (or whatever the key is)
    } else {
      console.log("Data is not found");
    }
  };
  console.log(data);
  const handleAdd = () => {
    const error = {};

    if (/\d/.test(mode)) {
      error.number = "Mode of income should not be in number";
    } else if (!mode) {
      error.mode = "required";
    } else {
      setModeItem([...modeItem, mode]);
      const db = getDatabase(app);
      const postsRef = ref(db, `user/datas/${userKey}/modeOfIncome`); // Adjust the reference according to your structure

      // Push form data to Firebase
      push(postsRef, {
        mode: mode,
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
    setErrors(error);
  };

  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);
  return (
    <div>
      <div className="grid border grid-cols-12">
        <div className="border col-span-2">
          <div className="flex justify-between">
            <div className="border">
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
        </div>
        <div className="border col-span-10">
          {/* <div>{data[0]}</div> */}
          {/* display the user data */}
          <label htmlFor="mode">Mode of income</label>
          <input
            type="text"
            placeholder="Enter mode of income"
            id="mode"
            name="mode"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            required
          />
          {errors && <div className="text-red-600">{errors.number}</div>}
          {errors && <div className="text-red-600">{errors.mode}</div>}
          <button onClick={handleAdd}>Add</button>

          {modeItem.map((item) => (
            <li>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserHome);
