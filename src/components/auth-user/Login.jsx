import { get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import app from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

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
          setMessage2("fields are correct");
        }
      } else {
        setMessage("invalid credential");
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
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <div>{errors && <div className="text-red-500">{errors.email}</div>}</div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password"
      />
      <div>
        {errors && <div className="text-red-500">{errors.password}</div>}
      </div>
      <div>{message && <>{message}</>}</div>
      <div>{message2 && <>{message2}</>}</div>
      <button onClick={handleSubmitLogin}>Submit</button>
    </div>
  );
};

export default React.memo(Login);
