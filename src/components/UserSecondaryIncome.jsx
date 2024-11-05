import { get, getDatabase, ref } from "firebase/database";
import { ArrowBigLeft, ArrowBigRight, Settings, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import app from "../firebase/firebaseConfig";

const UserSecondaryIncome = () => {
  const { id } = useParams();
  const [userKey, setUserKey] = useState("");
  const [data, setData] = useState([]);

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
    const postsRef = ref(db, `user/datas/${userKey}/seconderyIncome`); // Adjust the reference according to your structure
    const snapshot = await get(postsRef);
    if (snapshot.exists()) {
      console.log(Object.values(snapshot.val()));
      setData(Object.values(snapshot.val()));
    } else {
      alert("Do you want to allow the option for Income");
    }
  };
  const totalAmount = data.reduce((sum, item) => sum + Number(item.amount), 0);
  useEffect(() => {
    fetchData();
    fetchPrimaryData();
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
          {/* "/home/:id/viewPrimaryIncome" */}
        </div>
        <div className="col-span-7">
          {data.length > 0 ? (
            <>
              {data.map((item, index) => {
                return (
                  <>
                    <div className="border m-4">
                      <div>Amount - {item.amount}</div>
                      <div>date - {item.date}</div>
                      <div>description - {item.description}</div>
                      <div>option - {item.option}</div>
                      <div>
                        timestamp - {new Date(item.timestamp).getDate()}-
                        {new Date(item.timestamp).getMonth()}-
                        {new Date(item.timestamp).getFullYear()} /{" "}
                        {new Date(item.timestamp).getHours()}:
                        {new Date(item.timestamp).getMinutes()}:
                        {new Date(item.timestamp).getSeconds()}{" "}
                        {Number(new Date(item.timestamp).getHours()) > 12 ? (
                          <>PM</>
                        ) : (
                          <>AM</>
                        )}
                      </div>
                      <div>Mode - {item.type}</div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>No any primary income available</>
          )}
        </div>
        <div className="col-span-3"> Total Income- {totalAmount}</div>
      </div>
    </div>
  );
};

export default UserSecondaryIncome;
