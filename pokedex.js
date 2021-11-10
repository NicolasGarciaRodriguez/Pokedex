const pokedex = document.getElementById("pokedex");
const baseURL = "https://pokeapi.co/api/v2/pokemon/"


function PintarPokemons() {
    for (i = 1; i <= 150; i++) {
        fetch(baseURL + i)
            .then((respuestaAPI) => {
                return respuestaAPI.json()
            })
            .then((respuestaAPIJson) => {
                return respuestaAPIJson
            })
            .then((pokemon) => {
                let nombrePoke = pokemon.name
                let fotoPoke = pokemon.sprites.front_default
                let tipoPoke = pokemon.types.map((type) => type.type.name).join(", ")
                let idPoke = pokemon.id
                let div = document.querySelector("div")
                let ol = div.querySelector("ol")
                let div2 = document.createElement("div")
                let li = document.createElement("li")
                ol.appendChild(li)
                ol.appendChild(div2)
                div2.appendChild(li)
                let h2 = document.createElement("h2")
                let p = document.createElement("p")
                let img = document.createElement("img")
                let p2 = document.createElement("p2")
                li.appendChild(h2)
                li.appendChild(p)
                li.appendChild(p2)
                li.appendChild(img)
                div2.className = "card"
                img.className = "card-image"
                h2.className = "card-title"
                p.className = "card-subtitle"
                let pintarNombre = document.createTextNode(nombrePoke)
                let pintarTipo = document.createTextNode(tipoPoke)
                let pintarId = document.createTextNode(`id: ${idPoke}`)
                h2.appendChild(pintarNombre)
                p.appendChild(pintarTipo)
                p2.appendChild(pintarId)
                img.src = fotoPoke
            })
    }
}

PintarPokemons()