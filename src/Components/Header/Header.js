import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RigthHeaderButton, LogoImg } from "./style";
import { goToPokedexPage, goToPokemonsListPage } from "../../Router/coordinator";
import { getPokemonByName } from "../../API/requests";
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import pokelogo from "../../assets/pokelogo.png";

const Header = () => {
  let leftButtonText;
  let nextPage;

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pokeName = pathname.split("/")[2];

  const { pokedex,
    setPokedex, removePokemon } = useContext(GlobalStateContext)

  const isPokemonInPokedex = pokedex.find((poke) => poke.name === pokeName);
  const addPokedex = (name) => {
    getPokemonByName(name, (pokeData) => {
      setPokedex([...pokedex, pokeData])
    })
  }

  if (pathname === "/") {
    nextPage = () => goToPokedexPage(navigate);
  } else if (pathname === "/pokedex") {
    leftButtonText = "Todos os Pokémons";
    nextPage = () => goToPokemonsListPage(navigate);
  } else if (pathname.includes("/details/")) {
    leftButtonText = "Todos os Pokémons";
    nextPage = () => goToPokemonsListPage(navigate);
  }

  return (
    <>
      <HeaderContainer>
        {pathname === "/pokedex" || pathname.includes("/details") ?
        <LeftHeaderButton onClick={nextPage} ><u>&lt; {leftButtonText}</u></LeftHeaderButton>
        :
        <RigthHeaderButton onClick={nextPage} ><b>Pokédex</b></RigthHeaderButton>        
        }
        <LogoImg src={pokelogo} alt="logo pokemon" />
        {pathname.includes("/details/") && 
        (isPokemonInPokedex ? (
          <RigthHeaderButton red onClick={() => removePokemon(pokeName)} >Excluir da Pokédex</RigthHeaderButton>
        ) : (
          <RigthHeaderButton onClick={() => addPokedex(pokeName)} >Adicionar a Pokédex</RigthHeaderButton>
        ))}
      </HeaderContainer>
    </>
  );
};

export default Header;
