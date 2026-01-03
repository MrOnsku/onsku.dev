//maximizable images
function maximizeImage(element){
    let img = "";
    if(!element.classList.contains("maximizedimage")){
        if(!element.classList.contains("maximizedimagebg")){
            img = element.getAttribute("src");
            document.getElementsByClassName("maximizedimage")[0].src = img;
        }
    }

    let panel = document.getElementsByClassName("maximizedimagebg")[0];
    panel.style.display = "flex";
}

function minimizeImage(){
    let panel = document.getElementsByClassName("maximizedimagebg")[0];
    panel.style.display = "none";
}

document.writeln("<div class=\"maximizedimagebg zoomoutcursor\" onclick=\"minimizeImage()\">");
document.writeln("<img src=\"\" class=\"center maximizedimage\" onclick=\"minimizeImage()\">");
document.writeln("</div>");