//maximizable images
function maximizeImage(element){
    let img = "";
    if(!element.classList.contains("maximizedimage")){
        if(!element.classList.contains("maximizedimagebg")){
            img = element.getAttribute("src");
            subtext = element.getAttribute("subtext");

            //show subtext or not
            if(subtext === null || subtext === ""){
                document.getElementsByClassName("imagesubtext")[0].classList.add("hidden");
                document.getElementsByClassName("imagesubtext")[0].classList.remove("visible");
            }
            else{
                document.getElementsByClassName("imagesubtext")[0].classList.add("visible");
                document.getElementsByClassName("imagesubtext")[0].classList.remove("hidden");
            }

            document.getElementsByClassName("maximizedimage")[0].src = img;
            document.getElementsByClassName("imagesubtext")[0].textContent = subtext;
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
document.writeln("<p class=\"imagesubtext\">bals</p>")
document.writeln("</div>");