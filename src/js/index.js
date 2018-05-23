var itemTemplate = require("../templates/item.hbs");
let menu = JSON.parse(localStorage.getItem("savedMenu"));
let leftPrice = document.querySelector('#left-price');
let rightPrice = document.querySelector('#right-price')
let currentCategory='';
function renderMenu(k) {
  let itemsContainer = document.querySelector('#handle-test');
  if (itemsContainer !== undefined) {
    itemsContainer.innerHTML = '';
    for (let i = 0; i < k.length; i++) {
      var html = itemTemplate(k[i]);
      itemsContainer.innerHTML += html;
    }
  }
}

function filterByPrice(menu, price) {
  let res = price.split(",");
  maxPrice = parseInt(res[1]);
  minPrice = parseInt(res[0]);
  leftPrice.innerHTML = "&#36;" + minPrice;
  rightPrice.innerHTML = "&#36;" + maxPrice;
  let filtredMenu = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].price >= minPrice && menu[i].price <= maxPrice) {
      filtredMenu.push(menu[i]);
    }
  }
  return filtredMenu;
}

function filter(menu,price,category){

  let res = price.split(",");
  maxPrice = parseInt(res[1]);
  minPrice = parseInt(res[0]);
  leftPrice.innerHTML = "&#36;" + minPrice;
  rightPrice.innerHTML = "&#36;" + maxPrice;
  let filtredMenu = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].price >= minPrice && menu[i].price <= maxPrice && menu[i].category===category) {
      filtredMenu.push(menu[i]);
    }
  }
  return filtredMenu;
}
function sliderEvent(s){
  if(currentCategory!=''){
    k = filter(menu, s,currentCategory);
  }
  else{
    k = filterByPrice(menu,s);
  }
  renderMenu(k);
  console.log()
}

function renderItems() {
  $('index.html').html();
  let k = menu;

  renderMenu(k);
}

function intializeEventListeners() {
  let dropwdown_item = document.querySelector(".category-dropdown");
  let delFiters = document.querySelector("#del-filters");
  let slider2 = document.querySelector("#range2");
  let sliderGhost=document.querySelector(".ghost");

  dropwdown_item.addEventListener("click", function (e) {
    e.preventDefault();
    currentCategory=e.target.innerHTML;
    k = filter(menu, slider2.value,e.target.innerHTML);
    renderMenu(k);
  })

  slider2.addEventListener("click", function(){
    if(currentCategory!=''){
      k = filter(menu, slider2.value,currentCategory);
    }
    else{
      k = filterByPrice(menu,slider2.value);
    }
    renderMenu(k);
  });
  sliderGhost.addEventListener("click",function(){
    if(currentCategory!=''){
      k = filter(menu, slider2.value,currentCategory);
    }
    else{
      k = filterByPrice(menu,slider2.value);
    }
    renderMenu(k);
  })

  delFiters.addEventListener("click", function (e) {
    e.preventDefault();
    k = menu;
    currentCategory='';
    renderMenu(k);
  })
}

document.addEventListener("DOMContentLoaded", function (event) {
  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
  renderItems();
  intializeEventListeners();
});
