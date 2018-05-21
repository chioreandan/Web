function filterByCategory(menu,category){
    let filtredMenu=[];
    for(let i=0;i<menu.length;i++){
        if(menu[i].category===category){
            filtredMenu.push(menu[i]);
        }
    }
    return filtredMenu;


}
