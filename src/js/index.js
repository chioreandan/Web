let itemTemplate = require("../templates/item.hbs");
let menu = JSON.parse(localStorage.getItem("savedMenu"));
let leftPrice = document.querySelector('#left-price');
let rightPrice = document.querySelector('#right-price')
let currentCategory = '';

function renderMenu(items) {
  let itemsContainer = document.querySelector('#handle-test');
  if (itemsContainer !== undefined) {
    itemsContainer.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
      let html = itemTemplate(items[i]);
      itemsContainer.innerHTML += html;
    }
  }
}

function filterByPrice(menu, price) {
  let res = price.split(",");
  maxPrice = parseInt(res[1]);
  minPrice = parseInt(res[0]);
  leftPrice.innerHTML = `&#36; ${minPrice}`;
  rightPrice.innerHTML = `&#36; ${maxPrice}`;
  let filtredMenu = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].price >= minPrice && menu[i].price <= maxPrice) {
      filtredMenu.push(menu[i]);
    }
  }
  return filtredMenu;
}

function filter(menu, price, category) {
  let res = price.split(",");
  maxPrice = parseInt(res[1]);
  minPrice = parseInt(res[0]);
  leftPrice.innerHTML = `&#36; ${minPrice}`;
  rightPrice.innerHTML = `&#36; ${maxPrice}`;
  let filtredMenu = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].price >= minPrice && menu[i].price <= maxPrice && menu[i].category === category) {
      filtredMenu.push(menu[i]);
    }
  }
  return filtredMenu;
}

function sliderEvent(s) {
  if (currentCategory !== '') {
    items = filter(menu, s, currentCategory);
  }
  else {
    items = filterByPrice(menu, s);
  }
  renderMenu(items);
}

function renderItems() {
  $('index.html').html();
  renderMenu(menu);
}

function intializeEventListeners() {
  let dropwdown_item = document.querySelector(".category-dropdown");
  let delFiters = document.querySelector("#del-filters");
  let slider2 = document.querySelector("#range2");
  let sliderGhost = document.querySelector(".ghost");

  dropwdown_item.addEventListener("click", function (e) {
    e.preventDefault();
    currentCategory = e.target.innerHTML;
    items = filter(menu, slider2.value, e.target.innerHTML);
    renderMenu(items);
  })

  slider2.addEventListener("click", function () {
    if (currentCategory !== '') {
      items = filter(menu, slider2.value, currentCategory);
    }
    else {
      items = filterByPrice(menu, slider2.value);
    }
    renderMenu(items);
  });

  sliderGhost.addEventListener("click", function () {
    if (currentCategory !== '') {
      items = filter(menu, slider2.value, currentCategory);
    }
    else {
      items = filterByPrice(menu, slider2.value);
    }
    renderMenu(items);
  })

  delFiters.addEventListener("click", function (e) {
    e.preventDefault();
    items = menu;
    currentCategory = '';
    renderMenu(items);
  })
}

document.addEventListener("DOMContentLoaded", function (event) {
  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
  renderItems();
  intializeEventListeners();
});
