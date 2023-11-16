import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokedexContainer } from "./style";

const PokedexPage = ({ pokedex, removePokemon }) => {
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
