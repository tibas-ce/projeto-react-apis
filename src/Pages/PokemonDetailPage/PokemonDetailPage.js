import { useEffect, useState } from "react";
import {
  ImagesContainer,
  ImgWrapper,
  MovesContainer,
  PokeInfosContainer,
  StatsContainer,
  TitleContainer,
  TypeAndMovesContainer,
  TypesContainer,
} from "./style";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../API/requests";

const PokemonDetailPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    getPokemonByName(name, setPokemon);
  }, []);
  return (
    <>
      <PokeInfosContainer>
        <ImagesContainer>
          <ImgWrapper src={pokemon.sprites?.front_default} />
          <ImgWrapper src={pokemon.sprites?.back_default} />
        </ImagesContainer>
        <StatsContainer>
          <TitleContainer>Poderes</TitleContainer>
          {pokemon.stats?.map((poke) => {
            return (
              <p>
                <strong>{poke.stat.name}</strong> : {poke.base_stat}
              </p>
            );
          })}
        </StatsContainer>
        <TypeAndMovesContainer>
          <TypesContainer>
            {pokemon.types?.map((poke) => {
              return (<p>{poke.type.name}</p>);
            })}
          </TypesContainer>
        </TypeAndMovesContainer>
        <MovesContainer>
          <TitleContainer>Principais Ataques</TitleContainer>
          {pokemon.moves?.map((poke, index) => {
            return (index < 5 && <p key={index}>{poke.move.name}</p>);
          })}
        </MovesContainer>
      </PokeInfosContainer>
    </>
  );
};

export default PokemonDetailPage;