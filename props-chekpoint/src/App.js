/** @format */
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profilePicture from "./Profile/profile componement/profilePicture.png";
import FullName from "./Profile/FullName";
import Bio from "./Profile/Bio";
import Proffession from "./Profile/Proffession";

toast.configure();

function App() {
  const notify = () => {
    toast("Hello Siwar! Welcome to your profile!");
  };
  return (
    <div className='App'>
      <div
        className='imgName'
        style={{ display: "flex", alignContent: "center" }}>
        <div className='img' style={{ marginLeft: "5%", marginRight: "5%" }}>
          <img src={profilePicture} alt='my picture' />
        </div>
        <div style={{ marginTop: "5%" }}>
          <FullName myFullName='Siwar Belkhir' />
          <Bio
            myBio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.'
          />
          <Proffession myJob='Web Developer'></Proffession>
        </div>
      </div>
      <button onClick={notify} style={{ marginLeft: "18%" }}>
        Click me
      </button>
    </div>
  );
}

export default App;
