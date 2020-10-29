
async function getData(){

const charactersRequest = await fetch("https://swapi.dev/api/people/")
const characters = await charactersRequest.json()

const planetsRequest = await fetch("https://swapi.dev/api/planets/")
const planets = await planetsRequest.json()

console.log(characters.results)
console.log(planets.results)

}

getData()

