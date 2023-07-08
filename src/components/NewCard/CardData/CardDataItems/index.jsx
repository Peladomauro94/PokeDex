import React from "react";
import "./index.css";

function CardDataItems({ dataFeature, dataText, dataImg, classCont }) {



  return (
    <div className="card-data-items__total-container">
      <div className="card-data-items__container">
        <img src={dataImg} alt="" />
        <span className={classCont}>{dataText}</span>
      </div>

      <span>{dataFeature}</span>
    </div>
  );
}

export default CardDataItems;
