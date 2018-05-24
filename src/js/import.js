document.addEventListener("DOMContentLoaded", function (event) {

  var reinit = document.querySelector("#reinit-btn");

  let menu = [{
      pictureUrl: "images/menu/americanBurger.jpg",
      name: 'American Burger',
      category: "Burgers",
      price: 5.99,
    },
    {
      pictureUrl: "images/menu/chickenburger.jpg",
      name: "Chicken Burger",
      category: "Burgers",
      price: 12.99,
    },
    {
      pictureUrl: "images/menu/grandeburger.jpg",
      name: "Grande Burger",
      category: "Burgers",
      price: 20.99,
    },
    {
      pictureUrl: "images/menu/Spring-Burger.jpg",
      name: "Spring Burger",
      category: "Burgers",
      price: 5.99,
    },
    {
      pictureUrl: "images/menu/chiftelute-cu-piure.jpg",
      name: "Chiftelute cu piure",
      category: "Meals",
      price: 25.99,
    },
    {
      pictureUrl: "images/menu/chilli-con-carne.jpg",
      name: "Chilli con Carne",
      category: "Meals",
      price: 80.99,
    },
    {
      pictureUrl: "images/menu/ciorba-de-perisoare.jpg",
      name: "Ciorba de perisoare",
      category: "Soups",
      price: 5.49,
    },
    {
      pictureUrl: "images/menu/ciorba-radauteana.jpg",
      name: "Ciorba radauteana",
      category: "Soups",
      price: 8.99,
    },
    {
      pictureUrl: "images/menu/deliciosa.jpg",
      name: "Pizza deliciosa",
      category: "Pizza",
      price: 68.99,

    },
    {
      pictureUrl: "images/menu/paste.jpg",
      name: "Paste",
      category: "Pasta",
      price: 50.99,
    },
    {
      pictureUrl: "images/menu/snitel-de-vita.jpg",
      name: "Snitel de vita",
      category: "Meals",
      price: 40.99,

    },
    {
      pictureUrl: "images/menu/pizzaCasei.jpg",
      name: "Pizza casei",
      category: "Pizza",
      price: 21.99,
    }
  ]
  reinit.addEventListener("click", function () {
    let ls = localStorage.setItem("savedMenu", JSON.stringify(menu));
    location.reload();
  })

})
