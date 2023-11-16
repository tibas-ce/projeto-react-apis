import {
  ButtonContainer,
  ImgContainer,
  PokeCardContainer,
  PokeImg,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../Router/coordinator";

const PokemonCard = ({ poke, addPokemon, removePokemon }) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg
          src={poke.sprites.front_default}
          alt={`imagem do ${poke.name}`}
        />
      </ImgContainer>
      <ButtonContainer>
        {
          pathname === "/" ? (
            <button onClick={() => addPokemon(poke)}>Adicionar</button>
          ) : (
            <button onClick={() => removePokemon(poke.name)}>Remover</button>
          )
        }
        
        <button onClick={() => goToDetailPage(navigate, poke.name)}>
          Ver Detalhes
        </button>
      </ButtonContainer>
    </PokeCardContainer>
  );
};

export default PokemonCard;
