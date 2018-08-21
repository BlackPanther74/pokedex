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

const naruto = new Trainer("Naruto", "male", "Konaha", "Hokage / Gym Leader");

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
const pokeball = new Pokeball();
console.log(pokeball);

class Pokemon {
    // constructor(id, name, weight, height, type, hp, attack, defense, abilities) {
    constructor(data) {
        // console.log(data);
        this.id = data.id;
        this.name = data.name;
        this.weight = data.weight;
        this.height = data.height;
        this.type = data.types[0].type.name;
        this.hp = data.stats[5].base_stat;
        this.attack = data.stats[4].base_stat;
        this.defense = data.stats[3].base_stat;
        this.abilities = [];

        for (let i = 0; i < data.abilities.length; i++) {
            this.abilities.push(data.abilities[i].ability.name)
        }
    }
}

const chooseRaichu = axios.get("https://pokeapi.co/api/v2/pokemon/26/");
const chooseLeafeon = axios.get("https://pokeapi.co/api/v2/pokemon/470/");
const chooseArceus = axios.get("https://pokeapi.co/api/v2/pokemon/493/");

axios.all([chooseRaichu, chooseLeafeon, chooseArceus])
// axios.get("https://pokeapi.co/api/v2/pokemon/26")
.then(catchem => {
    const poke1 = catchem[0].data;
    const poke2 = catchem[1].data;
    const poke3 = catchem[2].data;

    M.AutoInit();

    // let 

    let raichu = new Pokemon(poke1);
    console.log(raichu);
    pokeball.add(raichu);
    naruto.add(raichu);


    let leafeon = new Pokemon(poke2);
    console.log(leafeon);
    pokeball.add(leafeon);
    naruto.add(leafeon);


    let arceus = new Pokemon(poke3);
    console.log(arceus);
    pokeball.add(arceus);
    naruto.add(arceus);

    console.log(pokeball);
    console.log(naruto);

    console.log(naruto.get("raichu"));

// Console log Raichu
    // console.log(poke1);
    // console.log("id: " + poke1.id);
    // console.log("name: " + poke1.name);
    // console.log("weight: " + poke1.weight);
    // console.log("height: " + poke1.height);
    // console.log("type: " + poke1.types[0].type.name);
    // console.log(poke1.stats[5].stat.name + ": " + poke1.stats[5].base_stat);
    // console.log(poke1.stats[4].stat.name + ": " + poke1.stats[4].base_stat);
    // console.log(poke1.stats[3].stat.name + ": " + poke1.stats[3].base_stat);
    // console.log(poke1.abilities[0].ability.name);
    // console.log(poke1.abilities[1].ability.name);

// Console log Leafeon
    // console.log(poke2);
    // console.log("id: " + poke2.id);
    // console.log("name: " + poke2.name);
    // console.log("weight: " + poke2.weight);
    // console.log("height: " + poke2.height);
    // console.log("type: " + poke2.types[0].type.name);
    // console.log(poke2.stats[5].stat.name + ": " + poke2.stats[5].base_stat);
    // console.log(poke2.stats[4].stat.name + ": " + poke2.stats[5].base_stat);
    // console.log(poke2.stats[3].stat.name + ": " + poke2.stats[5].base_stat);
    // console.log(poke2.abilities[0].ability.name);
    // console.log(poke2.abilities[1].ability.name);

// Console log Arceus
    // console.log(poke3);
    // console.log("id: " + poke3.id);
    // console.log("name: " + poke3.name);
    // console.log("weight: " + poke3.weight);
    // console.log("height: " + poke3.height);
    // console.log("type: " + poke3.types[0].type.name);
    // console.log(poke3.stats[5].stat.name + ": " + poke3.stats[5].base_stat);
    // console.log(poke3.stats[4].stat.name + ": " + poke3.stats[5].base_stat);
    // console.log(poke3.stats[3].stat.name + ": " + poke3.stats[5].base_stat);
    // console.log(poke3.abilities[0].ability.name);

    // console.log(raichu);

});

//  .catch(function(error) => {  
    // console.log(error);
    
// });




