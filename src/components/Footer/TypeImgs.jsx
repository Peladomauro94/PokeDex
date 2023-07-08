import React from "react";


function ArrowUp() {
  return(
    <>
      <img src="/practiceimgs/ArrowUp.png" alt="footer-arrow"      className="footer-arrow-img"
      />
    </>
  )
}

function Type(prop) {
  return (
    <>
      <button className="footer-btn">
        <img src= {prop.img} className={`footer-poke-type-icon ${prop.refreshButtonClass}`} onClick= {prop.click}/>
      </button>
    </>
  );
}




export { ArrowUp, Type };
