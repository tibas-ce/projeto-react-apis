import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import Header from "../Components/Header/Header";
import { useState } from "react";

const Router = () => {
  const [pokedex, setPokedex] = useState([]);

  const addPokemon = (pokemon) => {
    setPokedex([...pokedex, pokemon]);
  };

  const removePokemon = (pokeName) => {
    setPokedex(pokedex.filter((poke) => poke.name !== pokeName));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PokemonsListPage
              pokedex={pokedex}
              setPokedex={setPokedex}
              addPokemon={addPokemon}
            />
          }
        />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details/:name" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
