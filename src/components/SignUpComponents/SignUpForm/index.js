import React, { useState } from "react";
import InputComponent from "../../common/Input";
import Button from "../../common/Button";
function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignUp = () => {
    console.log(`handling signup`);
  };
  return (
    <>
      <InputComponent
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
      <Button text={"SignUp"} onClick={handleSignUp} />
    </>
  );
}

export default SignUpForm;
