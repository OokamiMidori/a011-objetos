const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
    ataques: []
};

const pokemon2 = {
    ...pokemon1
}
pokemon1.ataques.push({nome:"investida", dano: 40, tipo: "normal", precisao: 100})

pokemon2.ataques = [...pokemon1.ataques]
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"

pokemon1.ataques.push({nome:"Folha Navalha", dano: 45, precisao: 100, tipo: "Grama"})

pokemon2.ataques.push({nome:"Jato de Água", dano: 40, precisao: 100, tipo:"Água"})
console.log (pokemon1, pokemon2)