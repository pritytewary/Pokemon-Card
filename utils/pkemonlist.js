export const fetchPokemonList = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
  );
  const data = await res.json();
  return data.results;
};

export const fetchPokemonDetails = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return {
    name: data.name,
    image: data.sprites.front_default,
  };
};
