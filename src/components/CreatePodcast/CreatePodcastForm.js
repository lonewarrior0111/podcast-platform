import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputComponent from "../common/Input";
import Button from "../common/Button";
import { toast } from "react-toastify";
import FileInput from "../common/Input/FileInput";

function CreatePodcastForm() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [displayImage, setDisplayImage] = useState();
  const [bannerImage, setBannerImage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    toast.success(`handling podcast form!`);
    if (title && desc && displayImage && bannerImage) {
      setLoading(true);
      // 1. Upload files -> get downloadable links
      // 2. create a new doc iin a new collection called podcasts
      // 3. save this new podcast episodes states in our podcasts
    } else {
      toast.error("Please Enter All Values");
      setLoading(false);
    }
  };
  const displayImgFileHandleFunction = (file) => {
    setDisplayImage(file);
  };
  const bannerImgFileHandleFunction = (file) => {
    setBannerImage(file);
  };
  return (
    <>
      <InputComponent
        state={title}
        setState={setTitle}
        placeholder={"Enter title of your podcast!"}
        type={"text"}
        required={true}
      />
      <InputComponent
        state={desc}
        setState={setDesc}
        placeholder={"enter some description of your podcast!"}
        type={"text"}
        required={true}
      />
      <FileInput
        accept={"image/*"}
        id="display-image-input"
        fileHandleFunction={displayImgFileHandleFunction}
        text={"Display Image Upload"}
      />
      <FileInput
        accept={"image/*"}
        id="banner-image-input"
        fileHandleFunction={bannerImgFileHandleFunction}
        text={"Banner Image Upload"}
      />
      <Button
        text={loading ? "Loading..." : "Create a podcast!"}
        disabled={loading}
        onClick={handleSubmit}
      />
    </>
  );
}

export default CreatePodcastForm;
