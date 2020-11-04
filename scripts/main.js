
getCharacterData()


async function getCharacterData() {

    const charactersRequest = await fetch("https://swapi.dev/api/people/")
    const characterData = await charactersRequest.json()

    return characterData.results
}


async function listCharacters() {

    const loaderPosition = document.querySelector(".character")
    
displayLoader(loaderPosition)

    const characters = await getCharacterData()
    hideLoader()

  

    for (const currentCharacter of characters) {

  for (const currentCharacter of characters) {
    renderCharacterList(currentCharacter);
  }
}
}
listCharacters();

function renderCharacterList(character) {
  const characterList = document.querySelector(".character");
  const characterSlot = document.createElement("li");
  characterList.append(characterSlot);

  characterSlot.innerHTML = character.name;

  characterSlot.addEventListener("click", function (event) {
    const targetedCharacter = event.target.innerText;
    listCharacterDetails(targetedCharacter);
  });
}

async function listCharacterDetails(character) {
  const loaderPosition = document.querySelector(".charinfo");
  let clear = document.getElementsByClassName("charinfo")[0];
  clear.innerHTML = "";
  displayLoader(loaderPosition);

  let char = [];
  const list = await getCharacterData();

  hideLoader();

  for (const currentCharacter of list) {
    if (currentCharacter.name == character) {
      char = currentCharacter;
    }
  }

  renderCharacterDetails(char);
  listPlanetDetails(char);
}

function renderCharacterDetails(character) {
  
  const characterDetails = document.querySelector(".charinfo");
  const characterName = document.querySelector(".charactername");

  characterName.innerHTML = character.name;

  const characterHeight = document.createElement("li");
  characterDetails.append(characterHeight);
  characterHeight.innerHTML = "Heigh: " + character.height;

  const characterMass = document.createElement("li");
  characterDetails.append(characterMass);
  characterMass.innerHTML = "Mass: " + character.mass;

  const characterHairColor = document.createElement("li");
  characterDetails.append(characterHairColor);
  characterHairColor.innerHTML = "Hair color: " + character.hair_color;

  const characterSkinColor = document.createElement("li");
  characterDetails.append(characterSkinColor);
  characterSkinColor.innerHTML = "Skin color: " + character.skin_color;

  const characterEyeColor = document.createElement("li");
  characterDetails.append(characterEyeColor);
  characterEyeColor.innerHTML = "Eye color: " + character.eye_color;

  const characterBirthYear = document.createElement("li");
  characterDetails.append(characterBirthYear);
  characterBirthYear.innerHTML = "Eye color: " + character.birth_year;

  const characterGender = document.createElement("li");
  characterDetails.append(characterGender);
  characterGender.innerHTML = "Gender: " + character.gender;
}

async function listPlanetDetails(character) {
  
  let clear = document.getElementsByClassName("planetinfo")[0];
  clear.innerHTML = "";
  const loaderPosition = document.querySelector(".planetinfo");

  displayLoader(loaderPosition);

  const planetInfo = await fetch(character.homeworld);
  const planetData = await planetInfo.json();

  hideLoader();

  renderPlanetDetails(planetData);
}

function renderPlanetDetails(planet) {
  
  const planetDetails = document.querySelector(".planetinfo");
  const planetName = document.querySelector(".planetname");

  planetName.innerHTML = planet.name;

  const planetRotation = document.createElement("li");
  planetDetails.append(planetRotation);
  planetRotation.innerHTML = "Rotation period: " + planet.rotation_period;

  const planetOrbital = document.createElement("li");
  planetDetails.append(planetOrbital);
  planetOrbital.innerHTML = "Orbital period: " + planet.orbital_period;

  const planetDiameter = document.createElement("li");
  planetDetails.append(planetDiameter);
  planetDiameter.innerHTML = "Diameter: " + planet.diameter;

  const planetClimate = document.createElement("li");
  planetDetails.append(planetClimate);
  planetClimate.innerHTML = "Diameter: " + planet.climate;

  const planetGravity = document.createElement("li");
  planetDetails.append(planetGravity);
  planetGravity.innerHTML = "Gravity: " + planet.gravity;

  const planetTerrain = document.createElement("li");
  planetDetails.append(planetTerrain);
  planetTerrain.innerHTML = "Terrain: " + planet.terrain;
}

function displayLoader(position) {
  const divElement = document.createElement("div");
  const loader = divElement;
  loader.classList.add("loader");
  position.append(loader);
}

function hideLoader() {
  const loader = document.querySelector(".loader");
  loader.remove();
}

pagination()

function pagination(){

    const currentPage = document.querySelector(".currentpage")
    currentPage.innerHTML = "sidnummer"
}





// --------------clear detailstest -----------------





// function clearDetails() {

//     const detailsLists = document.querySelector(".characterinfo .planetinfo")
//     detailsLists.classList.add("clearinfo")

// }

// function showDetails() {
//     const detailsLists = document.querySelector(".characterinfo .planetinfo")
//     detailsLists.classList.add("clearinfo")

// }






// ----------------- test ------------------------- 

// let detailsLists = document.querySelector('.planetinfo'),
//     //detailsLists = document.querySelectorAll('li')

// detailsLists.forEach(function(item){
//     item.addEventListener('click', function(){
//         tabLink.forEach(function(detailsLists) {
//           detailsLists.classList.add('showplanetinfo')
//         })
//         item.classList.add('')
//     }, false)
// })

