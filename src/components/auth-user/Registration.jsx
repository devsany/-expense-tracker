import React, { useCallback, useEffect, useState } from "react";
import app from "../../firebase/firebaseConfig/index";
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  serverTimestamp,
} from "firebase/database";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

const Registration = () => {
  const [data, setData] = useState([]);
  const [inc, setInc] = useState(0);
  const [answers, setAnswers] = useState({
    name: "",
    profession: "",
    email: "",
    password: "",
    mobile: "",
    addhar: "",
  });
  const [errors, setErrors] = useState({});
  const [token, setToken] = useState("");
  const generateRandomString = useCallback(() => {
    // Define character sets: alphabets, numbers, and special characters
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@&*()_+{}:~";

    // Create an empty string to hold the result
    let result = "";

    // Generate a random character from the character set for each position in the length
    for (let i = 0; i < 50; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }

    setToken(result);
  }, []);

  const nav = useNavigate();
  const field = [
    {
      id: 1,
      name: "names",
      type: "text",
      key: "name",
      placeholder: "Enter your name",
    },
    {
      id: 2,
      name: "profession",
      type: "text",
      key: "profession",
      placeholder: "Enter your profession",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      key: "email",
      placeholder: "Enter your email",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      key: "password",
      placeholder: "Enter your password",
    },
    {
      id: 5,
      name: "mobile",
      type: "text",
      key: "mobile",
      placeholder: "Enter your mobile",
    },
    {
      id: 6,
      name: "addhar",
      type: "text",
      key: "addhar",
      placeholder: "Enter your addhar",
    },
  ];
  const handleInputChange = useCallback(
    (e) => {
      setAnswers({
        ...answers,
        [field[inc].key]: e.target.value || "",
      });
    },
    [inc, field]
  );

  // const fetchData = async () => {
  //   const db = getDatabase(app);
  //   const dataRef = ref(db, "user/datas");
  //   const snapshot = await get(dataRef);
  //   if (snapshot.exists()) {
  //     setData(Object.values(snapshot.val()));
  //   } else {
  //     alert("data is not found");
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = {};
    if (!answers.name) {
      error.name = "Required";
    } else if (!answers.profession) {
      error.profession = "required";
    } else if (!answers.email) {
      error.email = "required";
    } else if (!answers.password) {
      error.password = "required";
    } else if (!answers.mobile) {
      error.mobile = "required";
    } else if (!answers.addhar) {
      error.addhar = "required";
    } else {
      console.log(answers);
      const db = getDatabase(app);
      //firebase setup
      const newDocm = push(ref(db, "user/datas"));
      set(newDocm, {
        name: answers.name,
        profession: answers.profession,
        email: answers.email,
        password: answers.password,
        mobile: answers.mobile,
        addhar: answers.addhar,
        token: token,
        primaryIncome: [],
        seconderyIncome: [],
        expendture: [],
        timestamp: serverTimestamp(),
        modeOfIncome: [],
      })
        .then(() => {
          alert("data saved successfully");
          window.location.reload();
          setAnswers({});
          nav("/login");
        })
        .catch((err) => {
          console.error("error", err.message);
        });
    }
    setErrors(error);
  };
  console.log(token);
  useEffect(() => {
    // fetchData();
    generateRandomString();
  }, []);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor={field[inc].name}>{field[inc].name}</label>
        <input
          id={field[inc]}
          name={field[inc]}
          type={field[inc].type}
          placeholder={field[inc].placeholder}
          onChange={handleInputChange}
          value={answers[field[inc].key] || ""}
        />
        {errors && <div className="">{errors.name}</div>}

        {inc > 0 && (
          <div
            onClick={() => {
              setInc((p) => p - 1);
            }}
          >
            Back
          </div>
        )}
        {inc > 4 ? (
          <>
            <button>Submit</button>
          </>
        ) : (
          <>
            <div
              onClick={() => {
                setInc((p) => p + 1);
                console.log(inc);
              }}
            >
              Nexts
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default React.memo(Registration);
