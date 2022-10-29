import { displayData } from "./search.js";

window.filterByArea = filterByArea;


// function get all areas 
let allAreas= []
export async function getAllAreas() {
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    let areas = await res.json();
    allAreas = areas.meals;
   
    displayAreas();
}



// display areas
let displayarea = document.getElementById('displayarea');
function displayAreas() {
   let  cartona = '';
    allAreas.forEach(currentItem => {
        cartona +=`
        <div onclick="filterByArea('${currentItem.strArea}')" id="areas" class="col-md-3 col-sm-6 text-center fs-3 my-4 "> 
                <div><i class="fa-solid  fa-city"></i></div>
                <div  class="text-white">${currentItem.strArea}</div>
              </div>
        
        `
    });
    displayarea.innerHTML = cartona
}


// filter by area 
export async function filterByArea(area) {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    let resdata = await res.json();
    resdata = resdata.meals;
    console.log(resdata);


    displayData(resdata);
    $('section').fadeOut(500);
    $(".small-loading").css("display", "block");
    $(".small-loading").fadeOut(500);
    $('section[id="search"]').fadeIn(1000);
  

}

