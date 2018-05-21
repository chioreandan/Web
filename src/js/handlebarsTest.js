document.addEventListener("DOMContentLoaded", function (event) {
  let dropwdown_item = document.querySelector(".category-dropdown");
  menu = JSON.parse(localStorage.getItem("savedMenu"));

  let slider2 = document.querySelector("#range2");





  function filterByCategory(menu, category) {
    let filtredMenu = [];
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].category === category) {
        filtredMenu.push(menu[i]);
      }
    }
    return filtredMenu;
  }

  function filterByPrice(menu, price) {
    let res=price.split(",");
    maxPrice=parseInt(res[1]);
    minPrice=parseInt(res[0]);
    let filtredMenu = [];
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].price >= minPrice && menu[i].price <= maxPrice) {
        filtredMenu.push(menu[i]);
      }
    }
    return filtredMenu;
  }

  $.get('templates/itemsTemplate.html', function (data) {
    var template = Handlebars.compile(data);
    var test = document.querySelector('#handle-test');
    $('index.html').html();
    let k=menu;
    renderMenu(k);
    dropwdown_item.addEventListener("click",function(e){
      e.preventDefault();
      console.log(e.target.innerHTML);
      let p = filterByCategory(k, e.target.innerHTML);
      renderMenu(p);
    })
    slider2.addEventListener("click",function(e){
      //console.log(e.target.value);
      k=filterByPrice(menu,e.target.value);
      renderMenu(k);

    })


    function renderMenu(k){
      test.innerHTML='';
      for (let i = 0; i < k.length; i++) {
        var html = template(k[i]);
        test.innerHTML += html;

      }
    }


  })

}, 'html')
