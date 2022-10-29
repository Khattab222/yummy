
import { getAllAreas } from './getAllAreas.js';
import { getAllCategory } from './getAllCategory.js';
import {getAllIngredients} from './getIngredients.js';
import {  search, searchByLetter } from './search.js';


// show and hide nav bar
let innerWidth = $('.inner-nav').innerWidth();
$('aside').css('left',- innerWidth)
$('.bars').click(hideandShowNav)

function hideandShowNav() {
    if ($('aside').css('left') == '0px') {
        $('aside').animate({'left':- innerWidth});
        $('.bars').html('<i class="fa-solid fa-2xl fa-bars"></i>');
        $('.navbar-nav li').css({'opacity': '0',paddingTop: '500px'})

   
    }else{
        $('.bars').html('<i class="fa-solid fa-2xl fa-bars-staggered"></i>');
        $('aside').animate({'left': 0},500,function () {
            $('.navbar-nav li').animate({ opacity: "1",
            paddingTop: "10px"},800)
        });
 
    }
}

getAllCategory()

getAllAreas()


getAllIngredients();

// when document ready
$(document).ready(async function () {
    $('.sk-chase').fadeOut(1000,function () {
        $('.loading').fadeOut(1000);
        $('body').css('overflow', 'auto')
    })
        await search();


     
})

// when click nav a
$('.nav-item a').click(function (e) {
 
    let target = $(e.target).attr('data-link');
        let ele = $(`section[id='${target}']`);


if (e.target.id == 'search') {
    $('section').fadeOut(500);
    $(ele).fadeIn(300)
   $('#serach-page').fadeIn(500);
   $('#data-diplay').fadeOut(500);
 
}else{
   
    $('section').fadeOut(500);
  $(ele).fadeIn(300)
  $('#data-diplay').fadeIn(500);
  $('#serach-page').fadeOut(500);
   
}

hideandShowNav()

})



let searchInputName = document.getElementById('searchname');
let searchletter = document.getElementById('searchletter');

// when search by name
searchInputName.addEventListener('input', function (e) {
  
    let key = e.target.value;
    search(key);
    $('#data-diplay').fadeIn(300);

})
// when search by letter
searchletter.addEventListener('input', function (e) {
let key = e.target.value;
searchByLetter(key);
$('#data-diplay').fadeIn(300);
})




// validation

function iftrue(ele) {
    $(ele).next().css('display', 'none');
                
    $(ele).next().fadeOut(500);
    $(ele).css('border-bottom','1px solid green')
}

function iffalse(ele) {
    $(ele).css('border-bottom','1px solid #fff');
    $(ele).next().css('display', 'block');
    $(ele).next().fadeIn(500);


}


let uName = document.getElementById("uName");
let uEmail = document.getElementById("uEmail");
let uphone = document.getElementById('uphone');
let uage = document.getElementById('uage');
let pass = document.getElementById('pass');
let rePass = document.getElementById('rePass');
let btnSubmit = document.getElementById('btn-submit')

// check name validation
function checknamevalid() {
    let regex = /^[a-zA-Z]+$/
 if (regex.test(uName.value)){
    return true
 }
}
uName.addEventListener("input", function () {
   if (checknamevalid()) {
    iftrue(this);
    allInputeTrue()

   }else{
    iffalse(this)
   }
})


// check email validation
function checkEmailvalid() {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 if (regex.test(uEmail.value)){
    return true
 }
}
uEmail.addEventListener("input", function () {
    if (checkEmailvalid()) {
     iftrue(this);
     allInputeTrue()
    }else{
     iffalse(this)
    }
 })


 // check phone validation 

 function checkPhone() {
    let regex = /^(00201|01)[0125][0-9]{8}$/;
    if (regex.test(uphone.value)) {
        return true
    }
 }

 uphone.addEventListener("input", function () {
    if (checkPhone()) {
     iftrue(this);
     allInputeTrue()
    }else{
     iffalse(this)
    }
 })


 // check age validation    
 function checkAg() {
    let regex = /^[1-9]{1,1}[0-9]$/;
    if (regex.test(uage.value)) {
        return true
    }
 }


 uage.addEventListener('input', function () {
    if (checkAg()) {
   
     iftrue(this)
     allInputeTrue()
    }else{
     iffalse(this)  
    }
 })


 // check password validation 
 function checkPassValid() {
    let regex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

if(regex.test(pass.value)){
    return true
}

 }



 pass.addEventListener("input", function () {
    if (checkPassValid()) {
        iftrue(this);
        allInputeTrue()
    }else{
        iffalse(this)  
    }
 })



 // resPass validation


 rePass.addEventListener('input', function () {
    if (rePass.value == pass.value ) {
        iftrue(this);
        allInputeTrue()
    }else{
        iffalse(this) 
    }
 })

function allInputeTrue() {
    if (checknamevalid() && checkEmailvalid() && checkPhone() && checkAg() && checkPassValid() &&  rePass.value == pass.value ) {
        btnSubmit.removeAttribute('disabled')
    }else{
        btnSubmit.setAttribute('disabled', 'disabled')
    }
}




