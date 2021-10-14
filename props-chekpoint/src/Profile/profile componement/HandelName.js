
import React from "react";
import HandelNameStyle from'./HandelNameStyle.css';

function HandelName(props) {
  return (props.trigger)? (
        <div className='popup'>
             <div className='popup-inner'>
                <button className="close-btn">Close</button>
                {props.children}
             </div>
        </div>
    ): "";
}

export default HandelName;
