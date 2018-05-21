document.addEventListener("DOMContentLoaded", function (event) {
  var reinit = document.querySelector("#reinit-btn");

  let menu = [{
      pictureUrl: "../menu/americanBurger.jpg",
      name: 'American Burger',
      category: "Burgers",
      price: 17.29,
    },
    {
      pictureUrl: "../menu/chickenburger.jpg",
      name: "Chicken Burger",
      category: "Burgers",
      price: 19.49,
    },
    {
      pictureUrl: "../menu/grandeburger.jpg",
      name: "Grande Burger",
      category: "Burgers",
      price: 20.31,
    },
    {
      pictureUrl: "../menu/Spring-Burger.jpg",
      name: "Spring Burger",
      category: "Burgers",
      price: 14.32,
    },
    {
      pictureUrl: "../menu/chiftelute-cu-piure.jpg",
      name: "Chiftelute cu piure",
      category: "Meals",
      price: 23.32,
    },
    {
      pictureUrl: "../menu/chilli-con-carne.jpg",
      name: "Chilli con Carne",
      category: "Meals",
      price: 30.22,
    },
    {
      pictureUrl: "../menu/ciorba-de-perisoare.jpg",
      name: "Ciorba de perisoare",
      category: "Soups",
      price: 9.49,
    },
    {
      pictureUrl: "../menu/ciorba-radauteana.jpg",
      name: "Ciorba radauteana",
      category: "Soups",
      price: 8.99,
    },
    {
      pictureUrl: "../menu/deliciosa.jpg",
      name: "Pizza deliciosa",
      category: "Pizza",
      price: 18.99,

    },
    {
      pictureUrl: "../menu/paste.jpg",
      name: "Paste",
      category: "Pasta",
      price: 20.33,
    },
    {
      pictureUrl: "../menu/snitel-de-vita.jpg",
      name: "Snitel de vita",
      category: "Meals",
      price: 20.33,

    },
    {
      pictureUrl: "../menu/pizzaCasei.jpg",
      name: "Pizza case",
      category: "Pizza",
      price: 21.33,
    }
  ]
  reinit.addEventListener("Click", function () {
    let ls = localStorage.setItem("savedMenu", JSON.stringify(menu));
  })

})
