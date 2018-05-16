
document.addEventListener("DOMContentLoaded", function(event) { 

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

if(window.location.href.indexOf("Desktop") > -1) {
  alert("Alert: Desktop!");
}

let menu = [
  {name: 'American Burger',category: "Burgers",price:"17.29",pictureUrl:"../menu/americanBurger.jpg"},
  {name:"Chicken Burger", category:"Burgers", price:"19.49", pictureUrl:"../menu/chickenburger.jpg"},
  {name:"Grande Burger",category:"Burgers",price:"20.31",pictureUrl:"../menu/grandeburger.jpg"},
  {name:"Spring Burger",category:"Burgers",price:"14.32",pictureUrl:"../menu/Spring-Burger.jpg"},
  {name: "Chiftelute cu piure",category:"Meals",price:"23.32",pictureUrl:"../menu/chiftelute-cu-piure.jpg"},
  {name:"Chilli con Carne",category:"Meals",price:"30.22",pictureUrl:"../menu/chilli-con-carne.jpg"},
  {name:"Ciorba de perisoare",category:"Soups",price:"9.49",pictureUrl:"../menu/ciorba-de-perisoare.jpg"},
  {name:"Ciorba radauteana",category:"Soups",price:"8.99",pictureUrl:"../menu/ciorba-radauteana.jpg"},
  {name:"Pizza deliciosa",category:"Pizza",price:"18.99",pictureUrl:"../menu/deliciosa.jpg"},
  {name:"Paste",category:"Pasta",price:"20.33",pictureUrl:"../menu/paste.jpg"},
  {name:"Snitel de vita",category:"Meals",price:"20.33",pictureUrl:"../menu/snitel-de-vita.jpg"},
  {name:"Pizza case",category:"Pizza",price:"21.33",pictureUrl:"../menu/pizzaCasei.jpg"}
]
function printItems(menu){
  var wrapper = $('#wrapper'), container;
  for(let i=0;i<menu.length;i++) {
    container = $('<div id="grocery_item" class="container col-3 image-hover"></div>');
    wrapper.append(container);
    container.append('<div class="menu-image"><a href="#"><img src="'+menu[i].pictureUrl+'""></a></div>');
    container.append('<div class="item">' + menu[i].name +'</div>');
    container.append('<div class="category">' + menu[i].category +'</div>');
    container.append('<div class="price">&#36; ' + menu[i].price +'</div>');  
}
}
console.log(menu.length);
printItems(menu);








  });


