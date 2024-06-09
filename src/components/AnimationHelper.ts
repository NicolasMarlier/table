import './AnimationHelper.scss'

const launchPokeballSuccess = () => {
    const pokeball = document.getElementById("pokeball")
    const pokemon= document.getElementById("pokemon")
    if(pokeball === null || pokemon == null) return

    const pokemonRect = pokemon.getBoundingClientRect()
    const pokeballRect = pokemon.getBoundingClientRect()
    pokeball.style.top = `${pokemonRect.top + (pokeballRect.height) / 2}px`
    pokeball.style.left = `${pokemonRect.left + (pokeballRect.width) / 2}px`
    
    pokeball.classList.add("launched-success");
    pokemon.classList.add("launched-success");
    
    setTimeout(() => {
        pokeball.classList.remove("launched-success");
        pokemon.classList.remove("launched-success");
    }, 1000)
}

const launchPokeballFail = () => {
    const pokeball = document.getElementById("pokeball")
    const pokemon= document.getElementById("pokemon")
    if(pokeball === null || pokemon == null) return

    const pokemonRect = pokemon.getBoundingClientRect()
    const pokeballRect = pokemon.getBoundingClientRect()
    pokeball.style.top = `${pokemonRect.top + (pokeballRect.height) / 2}px`
    pokeball.style.left = `${pokemonRect.left + (pokeballRect.width) / 2}px`

    pokeball.classList.add("launched-failed");
    pokemon.classList.add("launched-failed");
    
    setTimeout(() => {
        pokeball.classList.remove("launched-failed");
        pokemon.classList.remove("launched-failed");
    }, 1000)
}


export {
    launchPokeballSuccess,
    launchPokeballFail
}