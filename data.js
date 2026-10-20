// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#001",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   monsterType: "Normal",                        //texte
//   type: "Dark",                                  // une valeur d'une liste fixe
//   race: "Spellcaster"                      // texte
//   level: 5,                                // number 0-12 explique on stars
//   stats: {attack: 49, defence: 49},        // 3 nombres de 0 à 5000
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
// Level 1 → ⭐
//Level 4 → ⭐⭐⭐⭐
//Level 7 → ⭐⭐⭐⭐⭐⭐⭐
//Level 12 → ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
//type here means the monster's attribute (DARK, LIGHT, FIRE, WATER, EARTH, WIND or DIVINE)
// Pensez à citer la source de vos images dans le README.

const creatures = [
  {
    id: "#001",
    name: "Exodia the Forbidden One",
    type: "DARK",
    monsterType: "Effect",
    race: "Spellcaster",
    stats: { atk: 1000, def: 1000, level: 3 },
    image: "./images/card-01.jpg",
    description: "The head of the legendary Forbidden One.",
    effect: "Win the Duel if you have Exodia's head, left leg, right leg, left arm, and right arm in your hand."
  },
  {
    id: "#002",
    name: "Darkest Sorcerer of Dark Magic",
    type: "DARK",
    monsterType: "Effect",
    race: "Spellcaster",
    stats: { atk: 4000, def: 3200, level: 12 },
    image: "./images/card-02.jpg",
    description: "A fan-made sorcerer with powerful magical abilities.",
    effect: "Fan-made card: its pictured effect can negate an opponent's card activation."
  },
  {
    id: "#003",
    name: "Red-Eyes Ultimate Dragon",
    type: "DARK",
    monsterType: "Fusion",
    race: "Dragon",
    stats: { atk: 3600, def: 2900, level: 10 },
    image: "./images/card-03.jpg",
    description: "A fan-made ultimate dragon created from Red-Eyes monsters.",
    effect: "Fan-made card: can revive Fusion Materials used for its Fusion Summon."
  },
  {
    id: "#004",
    name: "Divinity Warrior of the Gods",
    type: "DIVINE",
    monsterType: "Fusion",
    race: "Warrior",
    stats: { atk: 4500, def: 4500, level: 11 },
    image: "./images/card-04.jpg",
    description: "A fan-made divine warrior with immense power.",
    effect: "Fan-made card: its pictured effect includes multiple powerful abilities."
  },
  {
    id: "#005",
    name: "Black Chaos Soldier - Envoy of the Apocalypse",
    type: "DIVINE",
    monsterType: "Fusion",
    race: "Divine-Beast",
    stats: { atk: 8000, def: 6500, level: 10 },
    image: "./images/card-05.jpg",
    description: "A fan-made Fusion monster combining powerful warriors.",
    effect: "Fan-made card: its pictured effect includes damage and protection abilities."
  },
  {
    id: "#006",
    name: "Great Shadow Magus",
    type: "DARK",
    monsterType: "Ritual",
    race: "Spellcaster",
    stats: { atk: 4000, def: 4000, level: 10 },
    image: "./images/card-06.jpg",
    description: "A fan-made dark Ritual monster with powerful defensive abilities.",
    effect: "Fan-made card: can negate certain summons or card activations."
  },
  {
    id: "#007",
    name: "The Winged Dragon of Ra",
    type: "DIVINE",
    monsterType: "Effect",
    race: "Divine-Beast",
    stats: { atk: 0, def: 0, level: 10 },
    image: "./images/card-07.jpg",
    description: "An Egyptian God Card whose battle stats depend on its effect.",
    effect: "Its original ATK and DEF are not fixed; its ATK can depend on the Life Points paid when summoned."
  },
  {
    id: "#008",
    name: "The Ancient Dark Magician",
    type: "DARK",
    monsterType: "Effect",
    race: "Spellcaster",
    stats: { atk: 2500, def: 2100, level: 7 },
    image: "./images/card-08.jpg",
    description: "A fan-made dark magician inspired by Dark Magician.",
    effect: "Fan-made card: its pictured effect supports Spell and Trap card interactions."
  },
  {
    id: "#009",
    name: "Blue-Eyes White Dragon",
    type: "LIGHT",
    monsterType: "Normal",
    race: "Dragon",
    stats: { atk: 3000, def: 2500, level: 8 },
    image: "./images/card-09.jpg",
    description: "A legendary dragon with devastating attack power.",
    effect: null
  },
  {
    id: "#010",
    name: "Legendary Red-Eyes Black Dragon",
    type: "DARK",
    monsterType: "Xyz",
    race: "Dragon",
    stats: { atk: 3800, def: 3000, rank: 9 },
    image: "./images/card-10.jpg",
    description: "A fan-made Xyz dragon featuring Red-Eyes artwork.",
    effect: "Fan-made card: its pictured effect can inflict damage and summon a Red-Eyes monster."
  },
  {
    id: "#011",
    name: "Goddess of Sweet Revenge",
    type: "LIGHT",
    monsterType: "Effect",
    race: "Fairy",
    stats: { atk: 1800, def: 2000, level: 6 },
    image: "./images/card-11.jpg",
    description: "A Fairy monster that can turn a desperate situation around.",
    effect: "If you control no cards and this is your only card in hand, it can destroy your opponent's cards when they declare an attack."
  },
  {
    id: "#012",
    name: "Elemental HERO Magician Neos",
    type: "DARK",
    monsterType: "Fusion",
    race: "Spellcaster",
    stats: { atk: 3000, def: 3000, level: 10 },
    image: "./images/card-12.jpg",
    description: "A fan-made Fusion combining Dark Magician and Neos themes.",
    effect: "Fan-made card: its pictured effect can destroy a Spell Card and affect battling monsters."
  },
  {
    id: "#013",
    name: "Blue Eyes Dark Magic Dragon",
    type: "DARK",
    monsterType: "Fusion",
    race: "Dragon",
    stats: { atk: 3500, def: 3000, level: 10 },
    image: "./images/card-13.jpg",
    description: "A fan-made Fusion dragon combining Blue-Eyes and Dark Magician themes.",
    effect: "Fan-made card: its pictured effect can destroy a card and banish opposing Spell and Trap cards."
  },
  {
    id: "#014",
    name: "Silent Magician Zero",
    type: "LIGHT",
    monsterType: "Effect",
    race: "Spellcaster",
    stats: { atk: 1000, def: 1000, level: 4 },
    image: "./images/card-14.jpg",
    description: "A fan-made Silent Magician with a Level-based ability.",
    effect: "Fan-made card: its pictured effect can increase its Level and respond to Spell activations."
  },
  {
    id: "#015",
    name: "Dark Magician",
    type: "DARK",           // Attribute
    monsterType: "Normal",  // Normal or Effect or fusion
    race: "Spellcaster",
    stats: {
      atk: 2500,
      def: 2100,
      level: 7
    },
    image: "https://images.ygoprodeck.com/images/cards/46986414.jpg",
    description: "The ultimate wizard in terms of attack and defense.",
    effect: null
  },
  {
    id: "#016",
    name: "Dark Magician Girl",
    type: "DARK",
    monsterType: "Effect",
    race: "Spellcaster",
    level: "6 Stars",
    stats: {
      atk: 2000,
      def: 1700,
      stars: 6
    },
    image: "https://images.ygoprodeck.com/images/cards/38033121.jpg",
    description: "A spellcaster with a special ability.",
    effect: "Gains 300 ATK for every Dark Magician or Magician of Black Chaos in the Graveyard."
  },
];
