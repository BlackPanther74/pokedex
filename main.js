class Trainers {
    constructor(){
        this.all = []
    }

    add(trainer) {
        this.all.push(trainer)
    }

    get(name) {
        return this.all.find((element) => {
            return element.name == name
        })
    }
}

class Trainer {
    constructor(name, gender, hometown, occupation, pokemon){ 
    this.name = name;
    this.gender = gender;
    this.hometown = hometown;
    this.occupation = occupation;
    this.pokemon = [];
    }

    add(pokemon) {
        this.pokemon.push(pokemon)
    }

    get(name) {
        return this.pokemon.find((element) => {
            return element.name == name
        })
    }

}

const naruto = new Trainer("Naruto", "male", "London", "Gym Leader");

console.log(naruto);

class Pokeball {
    constructor() {
        this.all = []
    }

    add(pokemon) {
        this.all.push(pokemon)
    }

    get(name) {
        return this.all.find((element) => {
            return element.name = name
        })
    }
}

class Pokemon {
    constructor(name, weight, height, type, hp, attack, defense, abilities) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.type = type;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = [];


    }
}

// let getRaichu = axios.get("https://pokeapi.co/api/v2/pokemon/26/");
// let getLeafeon = axios.get("https://pokeapi.co/api/v2/pokemon/470/");
// let getArceus = axios.get("https://pokeapi.co/api/v2/pokemon/493/");

// axios.all([getRaichu, getLeafeon, getArceus])
// axios.get("https://pokeapi.co/api/v2/pokemon/26")
// .then(res => {
//     const poke1 = res[0].data;
//     const poke2 = res[1].data;
//     const poke3 = res[2].data;

    // console.log(poke1);
// });

//  .catch(function(error) => {  
    // console.log(error);
    
// });






