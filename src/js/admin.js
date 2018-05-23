var itemTemplate = require("../templates/adminItem.hbs");
menu = JSON.parse(localStorage.getItem("savedMenu"));
let modalSave = document.querySelector('#modal-save');
var template = itemTemplate;
let k = menu;

function renderAdminMenu(k) {
	let itemsContainer = document.querySelector('#admin-handle');
	if (itemsContainer !== undefined) {
		itemsContainer.innerHTML = '';
		for (let i = 0; i < k.length; i++) {
			var html = itemTemplate(k[i]);
			itemsContainer.innerHTML += html;
		}
	}
}
function toLocalStorage(menu) {
	let ls = localStorage.setItem("savedMenu", JSON.stringify(menu));
}
function renderItems() {
	$('admin.html').html();
	k = menu;
	renderAdminMenu(k);
}
function initializeEventListeners() {
	let btn = document.querySelectorAll('.buton-but');
	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener("click", function () {
			let toDel = menu[i].name;
			menu.splice(i, 1);
			let ls = localStorage.setItem("savedMenu", JSON.stringify(menu));
			location.reload();
		})
	}
	let pictureUrl = '';
	$('#i_file').change(function (event) {
		tmppath = URL.createObjectURL(event.target.files[0]);
		$("img").fadeIn("fast").attr('src', URL.createObjectURL(event.target.files[0]));
		pictureUrl = tmppath;
	});
	modalSave.addEventListener("click", function () {
		let name = document.getElementById('nume-produs').value;
		let category = document.getElementById('categorie-input').value;
		let price = document.getElementById('price-input').value;
		let prod = {
			pictureUrl,
			name,
			category,
			price
		};
		menu.push(prod);
		renderAdminMenu(k);
		let ls = localStorage.setItem("savedMenu", JSON.stringify(menu));
	})
}
document.addEventListener("DOMContentLoaded", function (event) {
	renderItems();
	initializeEventListeners();
})
