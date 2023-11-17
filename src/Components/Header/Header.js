import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RigthHeaderButton } from "./style";
import { goToPokedexPage, goToPokemonsListPage } from "../../Router/coordinator";
import { getPokemonByName } from "../../API/requests";

const Header = ({ pokedex,
  setPokedex, removePokemon }) => {
  let titlePage;
  let leftButtonText;
  let nextPage;

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pokeName = pathname.split("/")[2];

  const isPokemonInPokedex = pokedex.find((poke) => poke.name === pokeName);
  const addPokedex = (name) => {
    getPokemonByName(name, (pokeData) => {
      setPokedex([...pokedex, pokeData])
    })
  }

  if (pathname === "/") {
    titlePage = "Lista de Pokemons";
    leftButtonText = "Ver minha pokedex";
    nextPage = () => goToPokedexPage(navigate);
  } else if (pathname === "/pokedex") {
    titlePage = "Pokedex";
    leftButtonText = "Voltar para lista de Pokemons";
    nextPage = () => goToPokemonsListPage(navigate);
  } else if (pathname.includes("/details/")) {
    titlePage = pokeName;
    leftButtonText = "Voltar";
    nextPage = () => goToPokemonsListPage(navigate);
  }

  return (
    <>
      <HeaderContainer>
        <LeftHeaderButton onClick={nextPage}>
          {leftButtonText}
        </LeftHeaderButton>
        <h1>{titlePage}</h1>
        {pathname.includes("/details/") && 
        (isPokemonInPokedex ? (
          <RigthHeaderButton onClick={() => removePokemon(pokeName)} >Remover da Pokedex</RigthHeaderButton>
        ) : (
          <RigthHeaderButton onClick={() => addPokedex(pokeName)} >Adicionara Pokedex</RigthHeaderButton>
        ))}
      </HeaderContainer>
    </>
  );
};

export default Header;
