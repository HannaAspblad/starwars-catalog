
const bodyElement = document.querySelector("body")
const unorderedList= document.createElement("ul")
bodyElement.append(unorderedList)

async function getData(){

const charactersRequest = await fetch("https://swapi.dev/api/people/")
const characters = await charactersRequest.json()

const planetsRequest = await fetch("https://swapi.dev/api/planets/")
const planets = await planetsRequest.json()

console.log(characters.results)
console.log(planets.results)

const characterName = document.createElement("li")
unorderedList.append(characterName)
characterName.innerHTML = characters.results[0].name

const characterHeight = document.createElement("li")
unorderedList.append(characterHeight)
characterHeight.innerHTML = characters.results[0].height

const characterMass = document.createElement("li")
unorderedList.append(characterMass)
characterMass.innerHTML = characters.results[0].mass

}

getData()

