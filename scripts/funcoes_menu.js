function abrir_fechar_menu(){
    var menu = window.document.getElementsByTagName("menu")[0];

    if(menu.style.display=="none"){
        menu.style.display="block";
    }else{
        menu.style.display="none";
    }
}