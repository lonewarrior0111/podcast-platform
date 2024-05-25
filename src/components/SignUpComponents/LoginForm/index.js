import React, { useState } from "react";
import InputComponent from "../../common/Input";
import Button from "../../common/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../slices/userSlice";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    console.log(`handling login`);
    if (email && password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();
        console.log("userData", userData);

        dispatch(
          setUser({
            name: userData.name,
            email: user.email,
            uid: user.uid,
          })
        );

        navigate("/profile");
      } catch (e) {
        console.log(`error==> `, e);
      }
    } else {
      console.log(`there is some error`);
    }
  };
  return (
    <>
      {/* <InputComponent
        state={fullName}
        setState={setFullName}
        placeholder={"Enter full name"}
        type={"text"}
        required={true}
      /> */}
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
      {/* <InputComponent
        state={confirmPassword}
        setState={setConfirmPassword}
        placeholder={"confim password"}
        type={"password"}
        required={true}
      /> */}
      <Button text={"Login"} onClick={handleLogin} />
    </>
  );
}

export default LoginForm;
