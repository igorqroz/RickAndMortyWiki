let url = ('https://rickandmortyapi.com/api/')

async function personagens() {
    let resposta = await fetch(`${url}character/`)
    let body = await resposta.json()

    let filtraNomes = body.filter((nomes) => nomes.name)

    console.log(filtraNomes)
}

async function locais() {
    let resposta = await fetch(`${url}location/`)
    let body = await resposta.json()

    console.log(body)
}

async function episodios() {
    let resposta = await fetch(`${url}episode/`)
    let body = await resposta.json()

    console.log(body)
}

personagens()

// locais()

//episodios()