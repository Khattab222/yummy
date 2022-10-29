import { displayData } from "./search.js";

window.filterByIngredient= filterByIngredient;



// get all ingredients 
let AllIngred = [];
export async function getAllIngredients() {
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    let ingredients = await res.json();
    AllIngred = ingredients.meals.slice(0,20);
    displayIngred()

}



// display ingredients
let displayingred = document.getElementById('displayingred');
function displayIngred() {
   let cartona ='';
    AllIngred.forEach(currentItem => {
        cartona +=`
        
        <div onclick="filterByIngredient('${currentItem.strIngredient}')" class="col-md-3 col-sm-6 ingredients">
                <div><i class="fa-solid fa-bowl-food"></i></div>
                <h2>${currentItem.strIngredient}</h2>
                <p>${currentItem.strDescription.split(" ").slice(0,20).join(" ")}</p>
              </div>
        
        `
    });
    displayingred.innerHTML = cartona;

    
}




// filter by ingredients 

async function filterByIngredient(ing) {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`);
    let resData = await res.json();
    resData = resData.meals;
    console.log(resData);
    displayData(resData);
    $('section').fadeOut(500);
    $(".small-loading").css("display", "block");
    $(".small-loading").fadeOut(500);
    $('section[id="search"]').fadeIn(1000);
}
