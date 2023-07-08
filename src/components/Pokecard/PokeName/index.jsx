import { Link } from "react-router-dom";
import "./index.css";

const PokeName = ({ qualities, pokeDexNumber, toggleShinyActive, isShinyActive }) => {
  //falta que en lugar del indice 0 del array de pkms accedamos al pkm segun la ruta

  const idHandler = (id) => {
    if (id < 10) {
      return "00";
    } else if (id >= 10 && id < 100) {
      return "0";
    }
  };

  return (
    <>
      <div className="pokename-container-general">
        <div className="pokename-container-inner">
          <div className="pokename-container-name_arrows">
            <button className="pokename-arrow_button">
              <Link to="/">
                <div className="pokename-arrow-img"></div>
              </Link>
            </button>
            <span className="pokename-name">
              {qualities[pokeDexNumber]?.forms[0]?.name}
            </span>
          </div>
          <div className="pokename-shinybtn-container">
            <button
              onClick={toggleShinyActive}
              className={`pokename-button_shiny ${isShinyActive === false ? 'pokename-button_shiny-on': 'pokename-button_shiny-off'}`}
              
            >
              <img
                className={`pokename-shiny-button-img`}
                
                src="/public/practiceimgs/shinyIcon.png"
              />
            </button>
          
          <span className="pokename-pokedex_number">
            #{idHandler(qualities[pokeDexNumber]?.id)}
            {qualities[pokeDexNumber]?.id}
          </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default PokeName;
