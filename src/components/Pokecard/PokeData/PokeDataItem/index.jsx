import "./index.css";

const PokeDataItem = ( {value1, value2, description, measure1} ) => {
  const dataHandler = () => {
    let measureType = "";
    if (measure1 === "kg") {
      return (measureType = "pokedataitem-weight");
    } else if (measure1 === "m") {
      return (measureType = "pokedataitem-height");
    } else {
      return (measureType = "pokedataitem-ability");
    }
  };
  const measureClass = `${dataHandler()} pokedataitem-img`;

  return (
    <>
      <div className="pokedataitem-container">
        <div className="pokedataitem-container-upper">
          <div className={measureClass}></div>
          <div className="pokedataitem-p-container">
            <p className="pokedataitem-text">
              <span>{value1}</span>
              <span>{measure1}</span>
            </p>
            <p className="pokedataitem-text">{value2}</p>
          </div>
        </div>
        <div className="pokedataitem-description">{description}</div>
      </div>
    </>
  );
};

export default PokeDataItem;
