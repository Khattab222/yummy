// fetch data from Api

window.getDetails = getDetails;

export async function search(name = "") {
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  let finalData = await data.json();

  let allData = finalData.meals;

  if (allData) {
    displayData(allData);
    $(".small-loading").fadeOut(500);
  } else {
    $(".small-loading").css("display", "block");
  }
}

// function fetch data by letter
export async function searchByLetter(letter) {
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  let res = await data.json();
  if (res.meals) {
    displayData(res.meals);
    $(".small-loading").fadeOut(500);
  } else {
    $(".small-loading").css("display", "block");
  }
}

// function to display data
let diplayElement = document.getElementById("data-diplay");
export function displayData(meals) {
  let cartona = ``;

  for (let i = 0; i < meals.length; i++) {
    cartona += `
   
   <div  class="col-md-3 col-sm-6 mealsclick">
                      <div onclick="getDetails('${meals[i].idMeal}')" class="item position-relative ">
                          <img  class="w-100" src='${meals[i].strMealThumb}' alt="">
                          <div  class="layout position-absolute" >${meals[i].strMeal}</div>
                      </div>     
                  </div> 
   
   `;
  }

  diplayElement.innerHTML = cartona;
}

export async function getDetails(id) {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let mealsdetails = await res.json();
  mealsdetails = mealsdetails.meals;

  displayDetails(mealsdetails);
}

function displayDetails(themeal) {
  diplayElement.innerHTML = `
  
  <div class="meal-details">
              <div class="container">
                <div class="row">
                <div  class="col-md-4 text-center text-white">
                  <div><img class="w-100" src="${themeal[0].strMealThumb}" alt=""></div>
                  <h3>${themeal[0].strMeal}</h3>
                </div>
                <div class="col-md-8 text-white">
                  <h3>Instructions</h3>
                  <p>${themeal[0].strInstructions}</p>
                <p class="fw-bold">Area: <span> ${themeal[0].strArea}</span></p>
                <p class="fw-bold">Category: <span>${themeal[0].strCategory}</span></p>
                <div class="recipes">
                  recipes<p class="fs-2 ">Recipes :</p>
                  <span>${themeal[0].strMeasure1}</span>
                  <span>${themeal[0].strMeasure2}</span>
                  <span>${themeal[0].strMeasure3}</span>
                  <span>${themeal[0].strMeasure4}</span>
                  <span>${themeal[0].strMeasure5}</span>
                  <span>${themeal[0].strMeasure6}</span>
                </div>
                
                <p class="fs-2">Tags :</p>
                <div class="tags">
                  <span>${themeal[0].strTags}</span>
                <span>Onthego</span>
                </div>
               <div class="links-go">
                <a  href="${themeal[0].strSource}">Source</a>
                <a class="bg-danger" href="${themeal[0].strYoutube}">youtube</a>
               </div>
                </div>
              </div>
              </div>
            </div>
  
  
  
  `;
}
