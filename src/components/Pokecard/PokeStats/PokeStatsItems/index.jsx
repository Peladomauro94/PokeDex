import React from "react";
import "./index.css";

const PokeStatsItem = ({
  statName,
  statValue,
  qualities,
  statColor,
}) => {
  if (!qualities || qualities.length === 0) {
    return null; // Manejo del estado inicial mientras se obtienen los datos
  }

  return (
    <>
      <div className="pokestatsitem-container">
        <div className="pokestatsitem-container-inner">
          <span className="pokestatsitem-stat_text pokestatsitem-stat_text-grass">
            {statName}
          </span>
          <div className="pokestatsitem-organizer">
            <div className="pokestatsitem-line"></div>
            <span className="pokestatsitem-stat_value">{statValue}</span>
            <input
              className={`pokestatsitem-stat-range`}
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
    </>
  );
};

export default PokeStatsItem;
