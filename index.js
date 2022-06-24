class Warrior {
  #name;

  #attack;

  #hp;

  constructor(name, attack, hp) {
    this.#name = name;
    this.#attack = attack;
    this.#hp = hp;
  }
}

const zawisza = new Warrior('Zawisza Czarny', 10, 100);
const lionHearth = new Warrior('Ryszard Lwie Serce', 5, 50);

console.log(zawisza, lionHearth);
