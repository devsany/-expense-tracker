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
import {
  ArrowLeft,
  ArrowRight,
  ArrowRightCircle,
  ArrowRightFromLine,
  Umbrella,
} from "lucide-react";

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
    <div className="flex relative">
      <div className="w-[200px] h-[200px] absolute bg-blue-200 blur-3xl rounded-full"></div>
      <div className="      ml-10">
        <img
          src="3d-render-cartoon-office-worker-accountant-manager-clean-simple-design-office-background_1297092-1045-removebg-preview.png"
          alt="desk box"
        />
      </div>
      <div className="flex  ml-[50px] w-[200px] md:w-[500px] md:ml-[180px]  items-center h-screen">
        <form action="" onSubmit={handleSubmit}>
          {/* <label htmlFor={field[inc].name}>{field[inc].name}</label>
          <input
            id={field[inc]}
            name={field[inc]}
            type={field[inc].type}
            placeholder={field[inc].placeholder}
            onChange={handleInputChange}
            value={answers[field[inc].key] || ""}
          /> */}
          <div>
            <span className="font-semibold text-lg text-gray-700">
              Fill form *
            </span>
          </div>
          <div class="relative">
            <input
              id={field[inc]}
              name={field[inc]}
              type={field[inc].type}
              placeholder={field[inc].placeholder}
              onChange={handleInputChange}
              value={answers[field[inc].key] || ""}
              className="block px-2.5  mb-3 pb-2.5 border pt-4 w-[400px] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor={field[inc].name}
              for="floating_outlined"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              {field[inc].name}
            </label>
            {errors && <div className="">{errors.name}</div>}
          </div>
          <div className="flex float-end ">
            <div className="mr-3">
              {inc > 0 && (
                <div
                  onClick={() => {
                    setInc((p) => p - 1);
                  }}
                  className="cursor-pointer w-[100px]"
                >
                  <div className="flex transition duration-300 focus:outline-none  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-md hover:shadow-purple-400 hover:shadow-md  px-5 py-2.5   dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    <ArrowLeft className="w-5  text-[18px] mt-[2px]  text-white" />
                    <div className="font-semibold ">Back</div>{" "}
                  </div>
                </div>
              )}
            </div>
            <div>
              {inc > 4 ? (
                <>
                  <div className="flex transition duration-300 focus:outline-none w-[130px] cursor-pointer  text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-md hover:shadow-purple-400 hover:shadow-md  px-5 py-2.5   dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    <div className="font-semibold ">Submit</div>{" "}
                    <Umbrella className="w-5 text-[14px] ml-[5px] mt-[2px]  text-white" />
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={() => {
                      setInc((p) => p + 1);
                      console.log(inc);
                    }}
                    className="cursor-pointer w-[100px]"
                  >
                    <div className="flex transition duration-300 focus:outline-none  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-md hover:shadow-purple-400 hover:shadow-md  px-5 py-2.5   dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                      <div className="font-semibold ">Next</div>{" "}
                      <ArrowRight className="w-5 ml-1 text-[18px] mt-[2px]  text-white" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Registration);
