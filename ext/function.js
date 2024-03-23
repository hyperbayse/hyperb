function importHTML(element){
    var file = element.getAttribute("w3-include-html");
    if (file){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 400){element.innerHTML = this.responseText};
                if(this.status == 404){element.innerHTML = "Page not found"};
                element.removeAttribute("w3-include-html");
            }
        }
    }
};

function giveColor(el, val){
    var el, val;
    el.style.backgroundColor = val;
}

export {importHTML, giveColor}