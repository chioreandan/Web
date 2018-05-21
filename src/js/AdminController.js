document.addEventListener("DOMContentLoaded", function (event) {


    $.get('templates/itemsTemplateAdmin.html', function (data) {
        menu = JSON.parse(localStorage.getItem("savedMenu"));

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
                //localStorage.removeItem();
                let toDel=k[i].name;
                //console.log(toDel);
                k.splice(i,1);
                let ls = localStorage.setItem("savedMenu", JSON.stringify(menu));
                //renderAdminMenu(k);
                //localStorage.removeItem(menu[i].name);
                //localStorage.removeItem();

                location.reload();

            })
        }


    })
})
