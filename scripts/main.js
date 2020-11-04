let currentPage = 1; //hela pagineringen mkt meckigare än nödvändigt

getCharacterData();

listCharacters();

selectPage();

async function getCharacterData() {

  const pageRequest = "https://swapi.dev/api/people/?page=" + currentPage;
  const charactersRequest = await fetch(pageRequest);
  const characterData = await charactersRequest.json();

  return characterData.results;
}

async function listCharacters() {
  const loaderPosition = document.querySelector(".character");
  displayLoader(loaderPosition);
  const characters = await getCharacterData();
  hideLoader();

  for (const currentCharacter of characters) {
    renderCharacterList(currentCharacter);
  }
}

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
  clearchar();
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
  clearplanet();
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

function selectPage() {
  const pageNumber = document.querySelector(".pagenumber");
  const nextPage = document.querySelector(".nextpage");
  const previousPage = document.querySelector(".previouspage");
  const lastPage = "/9" //en riktigt ful en...
  previousPage.style.display = "none"
  pageNumber.innerHTML = currentPage + lastPage;

  nextPage.addEventListener("click", function (e) {

    const clear = document.querySelector(".character"); //byta till clear-funktion
    clear.innerHTML = "";                               //byta till clear-funktion

    currentPage += 1
    pageNumber.innerHTML = currentPage + lastPage;
    getCharacterData(currentPage);
    listCharacters();

    if (currentPage > 8) {
      nextPage.style.display = "none"
    }
    if (currentPage > 1) {
      previousPage.style.display = "block"
    }

  });

  previousPage.addEventListener("click", function (e) {

    const clear = document.querySelector(".character"); //byta till clear-funktion
    clear.innerHTML = "";                               //byta till clear-funktion

    currentPage -= 1
    pageNumber.innerHTML = currentPage + lastPage;
    getCharacterData(currentPage);
    listCharacters();

    if (currentPage < 9) {
      nextPage.style.display = "block"
    }

    if (currentPage == 1) {
      previousPage.style.display = "none"
    }

  });

}






// ------------ wip-funktion som rensar listor --------

// function clearList(list){

//   const currentElement = document.querySelector(list)
//   currentElement.innerHTML = ""

// }

function clearchar(charsnew) {
  var charsnew = document.getElementsByClassName("charinfo")[0];
  charsnew.innerHTML = "";
}

function clearplanet(planetsnew) {
  var planetsnew = document.getElementsByClassName("planetinfo")[0];
  planetsnew.innerHTML = "";
}


