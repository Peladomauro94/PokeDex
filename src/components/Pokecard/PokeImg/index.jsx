import { Link } from "react-router-dom";
import "./index.css";

const PokeImg = ({ qualities, pokeDexNumber, isShinyActive }) => {
  const totalPokemon = qualities.length;
  const pokePrev = pokeDexNumber === 0 ? totalPokemon : pokeDexNumber;
  const pokeNext = pokeDexNumber === totalPokemon - 1 ? 1 : pokeDexNumber + 2;

  if (qualities.length === 0) {
    console.log("no llegan los datos");
    return null;
  } else {
    console.log("llegan los datos");
  }
  const typeClass1 = `pokeimg-type_img-${qualities[pokeDexNumber]?.types[0]?.type?.name}`;
  const typeClass2 = `pokeimg-type_img-${qualities[pokeDexNumber]?.types[1]?.type?.name}`;
  console.log(typeClass1, typeClass2);

  return (
    <>
      <div className="pokeimg-container-general">
        <div className="pokeimg-container-inner">
          <div className="pokeimg-img-container">
            <button className="pokename-arrow_button">
              <Link to={`/pokecard/${pokePrev}`}>
                <div className="pokename-arrow-img"></div>
              </Link>
            </button>
            <img
              className="pokeimg-img"
              src={
                isShinyActive
                  ? qualities[pokeDexNumber]?.sprites?.other?.["official-artwork"]?.front_shiny
                  : qualities[pokeDexNumber]?.sprites?.other?.["official-artwork"]?.front_default
              }
              alt="pokeimg"
            />
           
            <button className="pokename-arrow_button">
              <Link to={`/pokecard/${pokeNext}`}>
                <div className="pokename-arrow-img-right"></div>
              </Link>
            </button>
          </div>

          <div className="pokeimg-type-container">
            <div className={typeClass1}></div>
            <div className={typeClass2}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PokeImg;
