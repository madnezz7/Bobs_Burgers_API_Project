const baseURL = "https://bobsburgers-api.herokuapp.com/characters/";


const submitBtn = document.getElementById('clickMe');
const searchForm = document.querySelector('form')
let inputDiv = document.getElementById('inputField');
let input = document.getElementById('field');
const job = document.getElementsByClassName("jobTitle");

searchForm.addEventListener('submit', grab);

function grab(e) {
    e.preventDefault();
    fetch(baseURL)
    .then(function (result)  {
        return result.json();
    })
    .then(function(json) {
        displayCharacterName(json);
    })
    .catch((error) => console.log("hey there is an error:", error));
};

function displayCharacterName(json) {
    let myEntry = input.value.toUpperCase();
    
    for (let i = 0; i <= json.length -1; i++) {
        
        let compareEntry = (json[i].name.toUpperCase());
        
        if(compareEntry.includes(myEntry)) {
            document.getElementById("characterImage").src=  (json[i].image);
            document.querySelector('h2').innerText = json[i].name;
            document.querySelector("p").innerText=(`${json[i].occupation}`);
        } 
    };
};





