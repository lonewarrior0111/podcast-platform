import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";

function Profile() {
  const user = useSelector((state) => state.user.user);
  console.log("user in profile--> ", user);
  return (
    <div>
      <Header />
      <h1>{user.name}</h1>
    </div>
  );
}

export default Profile;
