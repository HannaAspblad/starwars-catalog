
getData()
listCharacters()

async function getData() {

    const charactersRequest = await fetch("https://swapi.dev/api/people/")
    const data = await charactersRequest.json()

    return data.results
}

async function listCharacters() {

    displayLoader()

    const characters = await getData()

    hideLoader()


    for (const currentCharacter of characters) {

        renderCharacterList(currentCharacter)

    }
}


function renderCharacterList(character) {

    const characterList = document.querySelector(".character-list")
    const characterSlot = document.createElement("li")
    characterList.append(characterSlot)

    characterSlot.innerHTML = character.name

    characterSlot.addEventListener("click", function (event) {

        const targetedCharacter = event.target.innerText
        listDetails(targetedCharacter)

    })

}


async function listDetails(character) {

    let char = []

    const list = await getData()


    for (const currentCharacter of list) {

        if (currentCharacter.name == character) {

            char = currentCharacter
        }

    } renderDetails(char)
}


function renderDetails(character) {

    console.log(character)

    const characterDetails = document.querySelector(".character-details")
    const characterName = document.querySelector(".character-name")

    characterName.innerHTML = character.name

    const characterHeight = document.createElement("li")
    characterDetails.append(characterHeight)
    characterHeight.innerHTML = "Heigh: " + character.height

    const characterMass = document.createElement("li")
    characterDetails.append(characterMass)
    characterMass.innerHTML = "Mass: " + character.mass

    const characterHairColor = document.createElement("li")
    characterDetails.append(characterHairColor)
    characterHairColor.innerHTML = "Hair color: " + character.hair_color

    const characterSkinColor = document.createElement("li")
    characterDetails.append(characterSkinColor)
    characterSkinColor.innerHTML = "Skin color: " + character.skin_color

    const characterEyeColor = document.createElement("li")
    characterDetails.append(characterEyeColor)
    characterEyeColor.innerHTML = "Eye color: " + character.eye_color

    const characterBirthYear = document.createElement("li")
    characterDetails.append(characterBirthYear)
    characterBirthYear.innerHTML = "Eye color: " + character.birth_year

    const characterGender = document.createElement("li")
    characterDetails.append(characterGender)
    characterGender.innerHTML = "Gender: " + character.gender

}


function displayLoader() {

    const bodyElement = document.querySelector("body")
    const divElement = document.createElement("div")
    const loader = divElement
    loader.classList.add("loader")
    bodyElement.append(loader)

}


function hideLoader() {

    const loader = document.querySelector(".loader")
    loader.classList.add("hide-loader")

}





