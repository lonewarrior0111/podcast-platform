import React, { useState } from "react";
import Header from "../components/common/Header";
// import InputComponent from "../components/common/Input";
// import Button from "../components/common/Button";
import SignUpForm from "../components/SignUpComponents/SignUpForm";
import LoginForm from "../components/SignUpComponents/LoginForm";

function SignUpPage() {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [flag, setFlag] = useState(false);
  // const handleSignUp = () => {
  //   console.log(`handling signup`);
  // };
  // here we are trying to switch between pages on click from sign up to login page //
  return (
    <div>
      <Header />
      <div className="input-wrapper">
        {!flag ? <h1>SignUp</h1> : <h1>Login</h1>}
        {!flag ? <SignUpForm /> : <LoginForm />}
        {/* <InputComponent
          state={fullName}
          setState={setFullName}
          placeholder={"Enter full name"}
          type={"text"}
          required={true}
        />
        <InputComponent
          state={email}
          setState={setEmail}
          placeholder={"Enter email"}
          type={"text"}
          required={true}
        />
        <InputComponent
          state={password}
          setState={setPassword}
          placeholder={"Enter password"}
          type={"password"}
          required={true}
        />
        <InputComponent
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder={"confim password"}
          type={"password"}
          required={true}
        />
        <Button text={"SignUp"} onClick={handleSignUp} /> */}
        {!flag ? (
          <p style={{ cursor: "pointer" }} onClick={() => setFlag(!flag)}>
            Already having an account? Click here to login!
          </p>
        ) : (
          <p style={{ cursor: "pointer" }} onClick={() => setFlag(!flag)}>
            Don't have an account? Click here to signup
          </p>
        )}
      </div>
    </div>
  );
}

export default SignUpPage;
