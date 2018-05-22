document.addEventListener("DOMContentLoaded", function (event) {
  let leftPrice = document.querySelector('#left-price');
  let rightPrice = document.querySelector('#right-price')
  let dropwdown_item = document.querySelector(".category-dropdown");
  let delFiters = document.querySelector("#del-filters");
  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
  menu = JSON.parse(localStorage.getItem("savedMenu"));
  let slider2 = document.querySelector("#range2");



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

  $.get('templates/itemsTemplate.html', function (data) {
    var template = Handlebars.compile(data);
    var test = document.querySelector('#handle-test');
    $('index.html').html();
    let k = menu;
    let currentCategory='';
    renderMenu(k);

    function renderMenu(k) {
      test.innerHTML = '';
      for (let i = 0; i < k.length; i++) {
        var html = template(k[i]);
        test.innerHTML += html;
      }
    }
    dropwdown_item.addEventListener("click", function (e) {
      e.preventDefault();
      currentCategory=e.target.innerHTML;
      k = filter(menu, slider2.value,e.target.innerHTML);
      console.log(k);
      renderMenu(k);
    })
    slider2.addEventListener("click", function (e) {
      console.log(e.target.value);
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
      renderMenu(menu);
    })
  })
}, 'html')
