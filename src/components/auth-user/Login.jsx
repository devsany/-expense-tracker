import { get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import app from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Umbrella } from "lucide-react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState([]);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [allow, setAllow] = useState(false);
  const nav = useNavigate();
  const fetchData = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "user/datas");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      setData(Object.values(snapshot.val()));
    } else {
      alert("data is not found");
    }
  };

  console.log(data);
  const handleSubmitLogin = () => {
    const error = {};
    if (!email) {
      error.email = "required";
    } else if (!password) {
      error.password = "required";
    } else {
      if (email && password) {
        const status = data.filter((item) => {
          return item.email === email && item.password === password;
        });
        setState(status);
        console.log(status);
        if (status.length > 0) {
          setAllow(true);
          console.log(state);

          // nav(`/home/${email}4Ft3%?${password}`);
        } else {
          setMessage2("Fields are Incorrect");
        }
      } else {
        setMessage("Invalid Credential");
      }
    }
    setErrors(error);
  };
  const userData = () => {
    if (allow) {
      nav(`/home/${state[0].token}`);
    } else {
      nav("/login");
    }
  };
  useEffect(() => {
    fetchData();
    userData();
  }, [allow]);
  return (
    <div>
      <div className="flex justify-center items-center   h-screen">
        <form action="" className="w-[400px]" onClick={handleSubmitLogin}>
          <div className="mb-5 text-center text-3xl font-semibold text-gray-600">
            Login
          </div>
          <div className="mb-3">
            <div class="relative">
              <input
                required
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block px-2.5    pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Enter Email *
              </label>
            </div>
            <div className="font-semibold">
              {errors && <div className="text-red-500">{errors.email}</div>}
            </div>
          </div>

          <div className="mb-3">
            <div class="relative">
              <input
                required
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Enter Password *
              </label>
            </div>

            <div className="font-semibold">
              {errors && <div className="text-red-500">{errors.password}</div>}
            </div>
          </div>
          <div className="font-semibold text-red-500">
            {message && <>{message}</>}
          </div>
          <div className="font-semibold text-red-500">
            {message2 && <>{message2}</>}
          </div>
          <button type="submit">
            <div className="flex transition duration-300 focus:outline-none w-[130px] cursor-pointer  text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-md hover:shadow-green-400  hover:shadow-md  px-5 py-2.5   dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              <div className="font-semibold ">Submit</div>{" "}
              <Umbrella className="w-5 text-[14px] ml-[5px] mt-[2px]  text-white" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Login);
