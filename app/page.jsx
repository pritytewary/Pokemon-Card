"use client";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemonList, fetchPokemonDetails } from "../utils/pkemonlist";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const pokemonList = await fetchPokemonList();
      const detailedPokemonList = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const details = await fetchPokemonDetails(pokemon.url);
          return details;
        })
      );
      setPokemons(detailedPokemonList);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchQuery}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
