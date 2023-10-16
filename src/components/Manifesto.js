import React from "react";
import "../Styles/Manifesto.css";
export default function Manifesto(props) {
  return props.trigger ? (
    <>
      <div className="popup">
        <div className="popup-inner">
          <div className="close-btn">
            <button onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
