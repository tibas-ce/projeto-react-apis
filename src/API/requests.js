import axios from "axios";

export const getAllPokemons = (setData) => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    .then((res) => {
        const pokeResult = res.data.results
        const newRequest = pokeResult.map((poke) => axios.get(poke.url))
        Promise.all(newRequest).then((res) => {
            const pokeData = res.map((pokemon) => pokemon.data)
            setData(pokeData)
        })
    })
    .catch((err) => {
        console.log(err);
    })
}