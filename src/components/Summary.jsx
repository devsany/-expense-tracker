import { get, getDatabase, ref } from "firebase/database";
import { Settings, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import app from "../firebase/firebaseConfig";

const Summary = () => {
  const { id } = useParams();
  const [userKey, setUserKey] = useState("");
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

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
  const fetchPrimaryData = async () => {
    const db = getDatabase(app);
    const postsRef = ref(db, `user/datas/${userKey}/expendture`); // Adjust the reference according to your structure
    const snapshot = await get(postsRef);
    if (snapshot.exists()) {
      console.log(Object.values(snapshot.val()));
      setData(Object.values(snapshot.val()));
    } else {
      alert("Do you want to allow the option for Income");
    }
  };

  const fetchPrimaryData1 = async () => {
    const db = getDatabase(app);
    const postsRef = ref(db, `user/datas/${userKey}/primaryIncome`); // Adjust the reference according to your structure
    const snapshot = await get(postsRef);
    if (snapshot.exists()) {
      console.log(Object.values(snapshot.val()));
      setData1(Object.values(snapshot.val()));
    } else {
      alert("Do you want to allow the option for Income");
    }
  };

  const fetchPrimaryData2 = async () => {
    const db = getDatabase(app);
    const postsRef = ref(db, `user/datas/${userKey}/seconderyIncome`); // Adjust the reference according to your structure
    const snapshot = await get(postsRef);
    if (snapshot.exists()) {
      console.log(Object.values(snapshot.val()));
      setData2(Object.values(snapshot.val()));
    } else {
      alert("Do you want to allow the option for Income");
    }
  };
  const totalAmountPrimary = data1.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );
  const totalAmountSecondary = data2.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );
  const totalAmountExpendture = data.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );
  useEffect(() => {
    fetchData();
    fetchPrimaryData();
    fetchPrimaryData1();
    fetchPrimaryData2();
  });
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
        <div className="col-span-7 flex border m-4 p-4 shadow-lg">
          <div className="m-4 border bg-blue-500">
            <div>Total amount</div>
            <div>{totalAmountPrimary + totalAmountSecondary}</div>
          </div>
          <div className="m-4 border bg-green-500">
            <div>Total expencess</div>
            <div>{totalAmountExpendture}</div>
          </div>
          {totalAmountPrimary + totalAmountSecondary - totalAmountExpendture <=
          0 ? (
            <>
              <div className="m-4 border bg-red-500">
                <div>Current Amount</div>
                <div>
                  {totalAmountPrimary +
                    totalAmountSecondary -
                    totalAmountExpendture}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="m-4 border bg-purple-500">
                <div>Current Amount</div>
                <div>
                  {totalAmountPrimary +
                    totalAmountSecondary -
                    totalAmountExpendture}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
