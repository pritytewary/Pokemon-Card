// components/PokemonCard.js
import Image from "next/image";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white">
      <Image
        className="w-full"
        src={pokemon.image}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pokemon.name}</div>
      </div>
    </div>
  );
};

export default PokemonCard;
