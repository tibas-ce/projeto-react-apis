import { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = ({ children }) => {
    const [pokedex, setPokedex] = useState([]);

  const addPokemon = (pokemon) => {
    setPokedex([...pokedex, pokemon]);
  };

  const removePokemon = (pokeName) => {
    setPokedex(pokedex.filter((poke) => poke.name !== pokeName));
  };

  const data = {
    pokedex,
    setPokedex,
    addPokemon,
    removePokemon
  }

  return <GlobalStateContext.Provider value={data} >{children}</GlobalStateContext.Provider>;
};

export default GlobalState;
