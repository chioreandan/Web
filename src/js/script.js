
document.addEventListener("DOMContentLoaded", function(event) { 

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

var menu={
  "American Burger":{category: "Burgers",price:"17.29",pictureUrl:"../menu/americanBurger.jpg"},
  "Chicken Burger":{category:"Burgers",price:"19.49",pictureUrl:"../menu/chickenburger.jpg"},
  "Grande Burger":{category:"Burgers",price:"20.31",pictureUrl:"../menu/grandeburger.jpg"},
  "Spring Burger":{category:"Burgers",price:"14.32",pictureUrl:"../menu/Spring-Burger.jpg"},
  "Chiftelute cu piure":{category:"Meals",price:"23.32",pictureUrl:"../menu/chiftelute-cu-piure.jpg"},
  "Chilli con Carne":{category:"Meals",price:"30.22",pictureUrl:"../menu/chilli-con-carne.jpg"},
  "Ciorba de perisoare":{category:"Soups",price:"9.49",pictureUrl:"../menu/ciorba-de-perisoare.jpg"},
  "Ciorba radauteana":{category:"Soups",price:"8.99",pictureUrl:"../menu/ciorba-radauteana.jpg"},
  "Pizza deliciosa":{category:"Pizza",price:"18.99",pictureUrl:"../menu/deliciosa.jpg"},
  "Paste":{category:"Pasta",price:"20.33",pictureUrl:"../menu/paste.jpg"},
  "Snitel de vita":{category:"Meals",price:"20.33",pictureUrl:"../menu/snitel-de-vita.jpg"},
  "Pizza case":{category:"Pizza",price:"21.33",pictureUrl:"../menu/pizzaCasei.jpg"}
}


var wrapper = $('#wrapper'), container;
for (var key in menu){
    container = $('<div id="grocery_item" class="container col-3 image-hover"></div>');
    wrapper.append(container);
    container.append('<div class="menu-image"><a href="#"><img src="'+menu[key].pictureUrl+'""></a></div>');
    container.append('<div class="item">' + key +'</div>');
    container.append('<div class="category">' + menu[key].category +'</div>');
    container.append('<div class="price">&#36; ' + menu[key].price +'</div>');
    
}



  });


