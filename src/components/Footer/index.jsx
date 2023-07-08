import React, { useState } from "react";
import "./index.css";
import { ArrowUp, Type} from "./TypeImgs";

function Footer({ handleFilteredButtons }) {
  const [openFooter, setOpenFooter] = useState(false);
  const [arrowImage, setArrowImage] = useState("/practiceimgs/ArrowUp.png")
  const [buttonStyle, setButtonStyle] = useState("footer-arrow-btn");


  const onClick = () => {
    if (openFooter === true) {
      setOpenFooter(false);
      setArrowImage("/practiceimgs/ArrowUp.png");
      setButtonStyle("footer-arrow-btn");
      return document.getElementById("footer-list")
    } else {
      setOpenFooter(true);
      setArrowImage("/pngfind.com-cross-icon-png-1931093.png");
      setButtonStyle("footer-cross-btn");
      

  }
  };

  return (
    <>
      <div className="footer-container">
          {openFooter && (
           
          <nav className="nav-conteiner">
            <ul className="footer-list-wrapper" id="footer-list">             
              <Type img={"/practiceimgs/typeImgs/bug-circle.svg"} click={() => handleFilteredButtons("bug")}/>
              <Type img={"/practiceimgs/typeImgs/dark-circle.svg"} click={() => handleFilteredButtons("dark")}/>              
              <Type img={"/practiceimgs/typeImgs/dragon-circle.svg"} click={() => handleFilteredButtons("dragon")}/>                       
              <Type img={"/practiceimgs/typeImgs/poison-circle.svg"} click={() => handleFilteredButtons("poison")}/>               
              <Type img={"/practiceimgs/typeImgs/fairy-circle.svg"} click={() => handleFilteredButtons("fairy")}/>
              <Type img={"/practiceimgs/typeImgs/ghost-circle.svg"} click={() => handleFilteredButtons("ghost")}/> 
              <Type img={"/practiceimgs/typeImgs/water-circle.svg"} click={() => handleFilteredButtons("water")}/>
              <Type img={"/practiceimgs/typeImgs/flying-circle.svg"} click={() => handleFilteredButtons("flying")}/>
              <Type img={"/practiceimgs/typeImgs/fighting-circle.svg"} click={() => handleFilteredButtons("fighting")}/>   
              <Type img={"/practiceimgs/typeImgs/grass-circle.svg"} click={() => handleFilteredButtons("grass")}/>
              <Type img={"/practiceimgs/typeImgs/ground-circle.svg"} click={() =>handleFilteredButtons("ground")}/>
              <Type img={"/practiceimgs/typeImgs/ice-circle.svg"} click={() => handleFilteredButtons("ice")}/>
              <Type img={"/practiceimgs/typeImgs/normal-circle.svg"} click={() => handleFilteredButtons("normal")}/>
              <Type img={"/practiceimgs/typeImgs/electric-circle.svg"} click={() => handleFilteredButtons("electric")}/>
              <Type img={"/practiceimgs/typeImgs/psychic-circle.svg"} click={() => handleFilteredButtons("psychic")}/>
              <Type img={"/practiceimgs/typeImgs/rock-circle.svg"} click={() => handleFilteredButtons("rock")}/>
              <Type img={"/practiceimgs/typeImgs/steel-circle.svg"} click={() => handleFilteredButtons("steel")}/>
              <Type img={"/practiceimgs/typeImgs/fire-circle.svg"} click={() => handleFilteredButtons("fire")}/>
              <Type img={"/favpng_poké-ball-image-openclipart-clip-art.png"} refreshButtonClass={"footer-refresh_button"} click={() =>handleFilteredButtons("all")}/>
            </ul>
          </nav>
        )}

         <button className={buttonStyle} onClick={onClick}>
            <ArrowUp img={arrowImage}/>
        </button>
      </div>
    </>
  );
}

export default Footer;
