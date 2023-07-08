import React from "react";
import "./index.css";

function CardStatsItems({ statName, statValue, statColor }) {

 

  return (
    <div className="stat-item__total-conteiner">
      <div className="stat-item__conteiner">
        <span className={`stat-item__text`}>
          {statName}
        </span>
        <div className="stat-item__values">
          <span className="stat-item__number-value">{statValue}</span>
          <input
            className={`stat-item__range-value`}
            type="range"
            min={0}
            max={255}
            value={statValue}
            style={{
              "--stat-value": `${(statValue / 255) * 100}%`,
              "--stat-color": statColor,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CardStatsItems;
