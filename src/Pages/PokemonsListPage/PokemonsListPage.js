import { useContext, useEffect, useState } from "react";
import { getAllPokemons } from "../../API/requests";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListContainer, Title, SectionPokemons } from "./style";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const PokemonsListPage = () => {
  const [pokemons, setPokemons] = useState([]);

  const { pokedex, addPokemon } = useContext(GlobalStateContext);

  useEffect(() => {
    getAllPokemons(setPokemons);
  }, []);

  const filteredPokemons = pokemons.filter(
    (pokemon) => !pokedex.find((poke) => poke.name === pokemon.name)
  );

  return (
    <PokemonListContainer>
      <Title>Todos os Pokémons</Title>
      <SectionPokemons>
      {filteredPokemons.map((poke) => {
        return (
          <PokemonCard
            key={poke.id}
            poke={poke}
            pokedex={pokedex}
            addPokemon={addPokemon}
          />
        );
      })}
      </SectionPokemons>
    </PokemonListContainer>
  );
};

export default PokemonsListPage;
