import { useContext } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokedexContainer } from "./style";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const PokedexPage = () => {
  const { pokedex, removePokemon } = useContext(GlobalStateContext);
  return (
    <>
      <PokedexContainer>
        {pokedex.map((poke) => {
          return (
            <PokemonCard
              key={poke.id}
              poke={poke}
              removePokemon={removePokemon}
            />
          );
        })}
      </PokedexContainer>
    </>
  );
};

export default PokedexPage;
