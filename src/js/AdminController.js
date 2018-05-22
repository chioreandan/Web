document.addEventListener("DOMContentLoaded", function (event) {


    $.get('templates/itemsTemplateAdmin.html', function (data) {
        menu = JSON.parse(localStorage.getItem("savedMenu"));
        let modalSave=document.querySelector('#modal-save');
        var template = Handlebars.compile(data);
        var admin = document.querySelector('#admin-handle');

        $('adminIndex.html').html();
        let k = menu;

        renderAdminMenu(k);

        function renderAdminMenu(k){
            admin.innerHTML='';
            for (let i = 0; i < k.length; i++) {
              var html = template(k[i]);
              admin.innerHTML += html;


            }
        }
        let btn=document.querySelectorAll('.buton-but');


        function toLocalStorage(menu){
            let ls = localStorage.setItem("savedMenu", JSON.stringify(menu));
        }

        for(let i=0;i<btn.length;i++){
            btn[i].addEventListener("click",function(){
                let toDel=menu[i].name;
                menu.splice(i,1);
                let ls = localStorage.setItem("savedMenu", JSON.stringify(menu));
                location.reload();
            })
        }
        let pictureUrl='';
        $('#i_file').change( function(event) {
            tmppath = URL.createObjectURL(event.target.files[0]);
                $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
                pictureUrl=tmppath;



            });
        modalSave.addEventListener("click",function(){
            //let pictureUrl=document.getElementById('myImage').value;
            let name=document.getElementById('nume-produs').value;
            let category=document.getElementById('categorie-input').value;
            let price=document.getElementById('price-input').value;



            let prod={pictureUrl,name,category,price};
            console.log(prod);
            menu.push(prod);
            console.log(menu);
            renderAdminMenu(k);
           let ls = localStorage.setItem("savedMenu", JSON.stringify(menu));

        })






    })
})
