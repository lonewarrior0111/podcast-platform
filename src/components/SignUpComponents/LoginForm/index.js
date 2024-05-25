import React, { useState } from "react";
import InputComponent from "../../common/Input";
import Button from "../../common/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../slices/userSlice";
import { toast } from "react-toastify";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(`handling login`);
    setLoading(true);
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
        toast.success("Login Successful!");
        setLoading(false);
        navigate("/profile");
      } catch (error) {
        // console.log(`error==> `, e);
        setLoading(false);
        // console.log(error.message);
        toast.error(error.message);
      }
    } else {
      // console.log(`there is some error`);
      toast.error("fill in all the required fields!");
      setLoading(false);
    }
  };
  return (
    <>
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

      <Button
        text={loading ? "Loading..." : "Login"}
        onClick={handleLogin}
        disabled={loading}
      />
    </>
  );
}

export default LoginForm;
