import { displayData } from "./search.js";


window.filterByCategory = filterByCategory;

// get all category
let allCat;
export async function getAllCategory() {
  let res = await  fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  let categorys = await res.json();
  allCat = categorys.categories;

  displayCategories()
}
getAllCategory()

// function to display category data
let displaycat = document.getElementById('displaycat');

function displayCategories() {
    let cartona = ``;
    allCat.forEach(currentItem => {
        cartona += `
        <div class="col-md-3 col-sm-6 my-3">
        <div onclick="filterByCategory('${currentItem.strCategory}')" class="item position-relative ">
            <img class="w-100" src='${currentItem.strCategoryThumb}' alt="">
            <div class="layout flex-column position-absolute text-center">
              <div>${currentItem.strCategory}</div>
              <div class="fs-5">${currentItem.strCategoryDescription.split(" ").slice(0,12).join(" ")}.</div>
            </div>
        </div>     
    </div> 

        `   
    });
    displaycat.innerHTML = cartona;

    
}





// filter by Category 
async function filterByCategory(cat) {
  let res = await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
  let resdaetails = await res.json();
  resdaetails = resdaetails.meals
  console.log(resdaetails.lenght);



  displayData(resdaetails);
  $('section').fadeOut(500);
 
  $('section[id="search"]').fadeIn(1000);

  
}

