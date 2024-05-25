import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, db } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import InputComponent from "../../common/Input";
import Button from "../../common/Button";
import { doc, setDoc } from "firebase/firestore";
import { setUser } from "../../../slices/userSlice";

function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    console.log(`handling signup...`);
    setLoading(true);
    if (
      password === confirmPassword &&
      password.length >= 6 &&
      fullName &&
      email
    ) {
      try {
        // Creating user's account //
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("user", user);
        // storing the user's details //
        await setDoc(doc(db, "users", user.uid), {
          name: fullName,
          email: user.email,
          uid: user.uid,
        });
        // Save data in the redux, call the redux action
        dispatch(
          setUser({
            name: fullName,
            email: user.email,
            uid: user.uid,
          })
        );
        toast.success("Account created!");
        setLoading(false);
        navigate("/profile");
      } catch (e) {
        // console.log(`error==> `, e);
        toast.error(e.message);
        setLoading(false);
      }
    } else {
      if (password !== confirmPassword) {
        toast.error("Password and confirm password not matching!");
      } else if (password.length < 6) {
        toast.error("password length should be greater than 6 characters!");
      }
      setLoading(false);
    }
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
      <Button
        text={loading ? "Loading..." : "Signup"}
        disabled={loading}
        onClick={handleSignUp}
      />
    </>
  );
}

export default SignUpForm;
