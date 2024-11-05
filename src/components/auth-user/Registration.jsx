import React, { useState } from "react";
import app from "../../firebase/firebaseConfig/index";
import { getDatabase, ref, push, set } from "firebase/database";

const Registration = () => {
  const [inc, setInc] = useState(0);
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
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
  const handleInputChange = (e) => {
    setAnswers({
      ...answers,
      [field[inc].key]: e.target.value,
    });
  };
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
      })
        .then(() => {
          alert("data saved successfully");
          window.location.reload();
          setAnswers({});
        })
        .catch((err) => {
          console.error("error", err.message);
        });
    }
    setErrors(error);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor={field[inc].name}>{field[inc].name}</label>
        <input
          type={field[inc].type}
          placeholder={field[inc].placeholder}
          onChange={handleInputChange}
          value={answers[field[inc].key] || ""}
        />
        {errors && <div className="">{errors.name}</div>}

        {inc > 0 && (
          <div
            onClick={() => {
              setInc(inc - 1);
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
                setInc(inc + 1);
              }}
            >
              Next
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Registration;
