
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



    for (const currentCharacter of characters) {

        renderCharacterList(currentCharacter)
        
    }

    

}


async function listDetails(){

    const characterDetails = await getData()

    

    for(i=0; i < characterDetails.length; i++){
        renderDetails(characterDetails)

    }

    


}



function renderCharacterList(input) {

    const characterList = document.querySelector(".character-list")
    const characterSlot = document.createElement("li")
    characterList.append(characterSlot)



    characterSlot.innerHTML = input.name

    characterSlot.addEventListener("click", function (event) {

       
        const targetedCharacter = event.target.innerText
        console.log(targetedCharacter)
        //index of targeted character -> skicka in som val i arrayen i render details (i = index of targeted character)
        // const res = characters.indexof(targetedCharacter)

        // console.log(res)
       // renderDetails()
        
    })

}


function renderDetails(input){


    const characterDetails = document.querySelector(".character-details")
    const characterName = document.querySelector(".character-name")
   
    characterName.innerHTML = input[i].name

    const characterHeight = document.createElement("li")
    characterDetails.append(characterHeight)
    characterHeight.innerHTML = "Heigh: " + input[i].height

    const characterMass = document.createElement("li")
    characterDetails.append(characterMass)
    characterMass.innerHTML = "Mass: " + input[i].mass

    const characterHairColor = document.createElement("li")
    characterDetails.append(characterHairColor)
    characterHairColor.innerHTML = "Hair color: " + input[i].hair_color

    const characterSkinColor = document.createElement("li")
    characterDetails.append(characterSkinColor)
    characterSkinColor.innerHTML = "Skin color: " + input[i].skin_color

    const characterEyeColor = document.createElement("li")
    characterDetails.append(characterEyeColor)
    characterEyeColor.innerHTML = "Eye color: " + input[i].eye_color
    

    const characterBirthYear = document.createElement("li")
    characterDetails.append(characterBirthYear)
    characterBirthYear.innerHTML = "Eye color: " + input[i].birth_year

    const characterGender = document.createElement("li")
    characterDetails.append(characterGender)
    characterGender.innerHTML = "Gender: " + input[i].gender

    



    
    

}




function displayLoader(){

    const bodyElement = document.querySelector("body")
    const divElement = document.createElement("div")
    const loader = divElement
    loader.classList.add("loader")
    bodyElement.append(loader)

}


function hideLoader(loader) {

        loader.classList.add("hide-loader")

}





