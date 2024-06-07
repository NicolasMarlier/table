const launchPokeballSuccess = () => {
    const pokeball = document.getElementById("pokeball")
    const pokemon= document.getElementById("pokemon")
    if(pokeball === null || pokemon == null) return
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const pokeballWidth = 100;
    const pokeballHeight = 100;
    const pokemonX = pokemon.getBoundingClientRect().x;
    const pokemonY = pokemon.getBoundingClientRect().y;
    const pokemonWidth = Math.round(pokemon.getBoundingClientRect().width);
    const pokemonHeight = Math.round(pokemon.getBoundingClientRect().height);
    
    pokeball.animate(
        [
            { opacity: 1, transform: `translateY(${windowHeight}px) translateX(${windowWidth}px) scale(1)` },
            { opacity: 1, transform: `translateY(${pokemonY + (pokemonHeight - pokeballHeight) / 2}px) translateX(${pokemonX + (pokemonWidth - pokeballWidth) / 2}px) scale(0.15)` },
            { opacity: 1, transform: `translateY(${pokemonY + (pokemonHeight - pokeballHeight) / 2}px) translateX(${pokemonX + (pokemonWidth - pokeballWidth) / 2}px) scale(0.15)` },
            { opacity: 1, transform: `translateY(${pokemonY + (pokemonHeight - pokeballHeight) / 2}px) translateX(${pokemonX + (pokemonWidth - pokeballWidth) / 2}px) scale(0.15)` },
        ],
        {
          duration: 1000,
          iterations: 1,
          easing: "ease-out"
        },
      );
    pokemon.animate(
    [
        { filter: 'brightness(1)' },
        { filter: 'brightness(1)' },
        { filter: 'brightness(100)' },
        { opacity: 0 },
    ],
    {
        duration: 1000,
        iterations: 1,
        easing: "ease-out"
    },
    );
}

const launchPokeballFail = () => {
    const pokeball = document.getElementById("pokeball")
    const pokemon= document.getElementById("pokemon")
    if(pokeball === null || pokemon == null) return
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    pokeball.animate(
        [
            { opacity: 1, transform: `translateY(${windowHeight}px) translateX(${windowWidth}px) scale(1)` },
            { opacity: 1, transform: `translateY(-50px) translateX(${windowWidth / 2}px) scale(0.05)` },
            
        ],
        {
          duration: 1000,
          iterations: 1,
          easing: "ease-out"
        },
      );
}
export {
    launchPokeballSuccess,
    launchPokeballFail
}