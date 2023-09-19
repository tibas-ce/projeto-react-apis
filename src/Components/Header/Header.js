import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RigthHeaderButton } from "./style";
import { goToPokedexPage, goToPokemonsListPage } from "../../Router/coordinator";

const Header = () => {
  let titlePage;
  let leftButtonText;
  let nextPage;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === "/") {
    titlePage = "Lista de Pokemons";
    leftButtonText = "Ver minha pokedex";
    nextPage = () => goToPokedexPage(navigate);
  } else if (pathname === "/pokedex") {
    titlePage = "Pokedex";
    leftButtonText = "Voltar para lista de Pokemons";
    nextPage = () => goToPokemonsListPage(navigate);
  } else if (pathname.includes("/details/")) {
    titlePage = "Nome do Pokemon";
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
        {pathname.includes("/details/") ? (
          <RigthHeaderButton>Adicionar / Remover da Pokedex</RigthHeaderButton>
        ) : (
          <></>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
