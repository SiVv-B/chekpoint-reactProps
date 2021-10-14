/** @format */
import React from "react";
import "./App.css";
import profilePicture from "./Profile/profile componement/profilePicture.png";
import FullName from "./Profile/FullName";
import Bio from "./Profile/Bio";
import HandelName from "./Profile/profile componement/HandelName";


function App() {
  return (
    <div className='App'>
      <div className='imgName' style={{ display: "flex",alignContent:'center' }}>
        <div className='img' style={{ marginLeft: "5%", marginRight: "5%" }}>
          <img src={profilePicture} alt='my picture' />
        </div>
        <div style={{ marginTop: "5%" }}>
          <FullName myFullName='Siwar Belkhir' />
          <Bio
            myBio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.'
          />
        </div>
      </div>

      <main>
      <button style={{ marginLeft: "18%"}}>Click me</button>
    </main>
    <HandelName trigger={true}>
      <h3>Welcome Siwar Belkhir</h3>
    </HandelName>

    </div>
  );
}

export default App;
