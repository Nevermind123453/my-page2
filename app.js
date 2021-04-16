window.onload=function(){
let btn = document.querySelector("#contact");
let hide=document.querySelector("#contact-block")
let pn=document.querySelector("#phone");
let ht=document.querySelector("#html1")
let btn2=document.querySelector("#dropdown-button btn2")
let html_menu = document.querySelector("#html-menu");
        let css_menu = document.querySelector("#css-menu");
        let js_menu = document.querySelector("#js-menu")
   hide.hidden=true;
btn.onclick = function(){
   /*  alert("Привет Ты на страничке Прокопцева Александра"); */
    hide.hidden=false;
}
pn.onclick=function(){
    alert("+779787145023")
}

  html_menu.onclick = function(){
    html_card.style.display = "block";
}
}


let html_menu = document.querySelector("#html-menu");
        let css_menu = document.querySelector("#css-menu");
        let js_menu = document.querySelector("#js-menu");
        let html_card = document.querySelector(".html");
        let css_card = document.querySelector(".css");
        let js_card = document.querySelector(".js");

        html_menu.onclick = function(){
            html_card.style.display = "block";
        }
        
        css_menu.onclick = function(){
            css_card.style.display = "block";
        }

        js_menu.onclick = function(){
            js_card.style.display = "block";
        }

