import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const password = useRef();
  const [btnTextLoad, setBtnTextLoad] = useState("Submit");
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  const handleWithFrom = (e) => {
    e.preventDefault();
    console.log(password);
    console.log(email);
    setBtnTextLoad("Loading...");
    setTimeout(() => {
      alert("Sign in");
      setBtnTextLoad("Submit");
      navigate("/");
    }, 3000);
    password.current.value = "";
    setEmail("");
  };

  const shoWPassWord = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <form
      style={{
        backgroundColor: "black",
        padding: "30px",
        display: "flex",
        gap: "5px",
        flexDirection: "column",
      }}
      onSubmit={handleWithFrom}
      className="form-sign-in"
    >
      <h2>SIGN IN</h2>
      <label htmlFor="email" className="email">
        Email
      </label>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        name="email"
        type="text"
        className="emai-input"
      />
      <br />
      <label htmlFor="Password" className="Password">
        Password
      </label>
      <input
        ref={password}
        name="Password"
        type={passwordType}
        className={"Password-input" + (passwordType === "text" && " color")}
      />
      <label onClick={shoWPassWord}>Show password</label>
      <br />
      <br />
      <button className="submit" type="submit">
        {btnTextLoad}
      </button>
    </form>
  );
};
export default SignInPage;
