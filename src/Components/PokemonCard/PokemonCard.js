import {
  ButtonContainer,
  ImgContainer,
  PokeCardContainer,
  PokeImg,
} from "./style";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../Router/coordinator";

const PokemonCard = ({ poke }) => {
  const navigate = useNavigate();

  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg
          src={poke.sprites.front_default}
          alt={`imagem do ${poke.name}`}
        />
      </ImgContainer>
      <ButtonContainer>
        <button>Adicionar</button>
        <button onClick={() => goToDetailPage(navigate, poke.name)}>
          Ver Detalhes
        </button>
      </ButtonContainer>
    </PokeCardContainer>
  );
};

export default PokemonCard;
