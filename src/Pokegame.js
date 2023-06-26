import React from "react";
import Pokedex from "./Pokedex";

function Pokegame(props) {
  let hand1 = [];
  let hand2 = [...props.pokemon];

  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }

  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 6, name: "Charizard", type: "Fire/Flying", base_experience: 209 },
    { id: 148, name: "Dragonair", type: "Dragon", base_experience: 144 },
    { id: 18, name: "Pidgeot", type: "Normal/Flying", base_experience: 172 },
    { id: 448, name: "Lucario", type: "Fighting/Steel", base_experience: 204 },
    { id: 392, name: "Infernape", type: "Fire/Fighting", base_experience: 209 },
    { id: 398, name: "Staraptor", type: "Normal/Flying", base_experience: 218 },
    { id: 94, name: "Gengar", type: "Ghost/Poison", base_experience: 225 },
    { id: 128, name: "Tauros", type: "normal", base_experience: 211 }
  ]
};

export default Pokegame;
