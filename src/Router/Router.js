import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import Header from "../Components/Header/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PokemonsListPage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/details/:name" element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;