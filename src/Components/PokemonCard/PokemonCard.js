import {
  ButtonCaptureRemove,
  ButtonContainer,
  ButtonDetails,
  ImgContainer,
  InfoContainer,
  PokeCardContainer,
  PokeImg,
  TypeImg,
  PokeBallImg
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../Router/coordinator";
import { returnTypes } from "../../utils/returnTypes";
import { returnBackgroundColorCard } from "../../utils/returnBackgroundColorCard";
import pokeball from "../../assets/pokeball.png"

const PokemonCard = ({ poke, addPokemon, removePokemon }) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <PokeCardContainer type={returnBackgroundColorCard(poke.types[0].type.name)} >
      <InfoContainer>
        <p>#{poke.id}</p>
        <h1>{poke.name}</h1>
        <div>
          {poke.types.map((type) => {
            return <TypeImg src={returnTypes(type.type.name)} alt="Tipos"/>
          })}
        </div>
      </InfoContainer>
      <ImgContainer>
        <PokeBallImg src={pokeball} all="poke-bola" />  
        <PokeImg
          // Quando temos separação de palavras em uma propriedade de um objeto para acessar usamos colchetes e transformamos em string
          src={poke.sprites.other["official-artwork"].front_default}
          alt={`imagem do ${poke.name}`}
        />
      </ImgContainer>
      <ButtonContainer>
        <ButtonDetails onClick={() => goToDetailPage(navigate, poke.name)}>
          <u>Detalhes</u>
        </ButtonDetails>
        {
          pathname === "/" ? (
            <ButtonCaptureRemove onClick={() => addPokemon(poke)}>Capturar!</ButtonCaptureRemove>
          ) : (
            <ButtonCaptureRemove onClick={() => removePokemon(poke.name)}>Remover</ButtonCaptureRemove>
          )
        }
      </ButtonContainer>
    </PokeCardContainer>
  );
};

export default PokemonCard;
