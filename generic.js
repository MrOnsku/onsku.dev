//animate elements when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//collapsibles
var coll = document.getElementsByClassName("collapsible");

function updateAncestors(el){
    let node = el.parentElement;
    while (node){
        if(node.classList && node.classList.contains('collapsiblecontent')){
            node.style.maxHeight = node.scrollHeight + "px";
        }
        node = node.parentElement;
    }
}

for(let i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function (){
        this.classList.toggle("collapsibleactive");
        const content = this.nextElementSibling;
        if (!content) return;

        const isOpen = !!content.style.maxHeight && content.style.maxHeight !== "0px";

        if(isOpen){
            content.style.maxHeight = content.scrollHeight + "px";
            requestAnimationFrame(() => {
                content.style.maxHeight = "0px";
            });
        }
        else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
        
        const onTransitionEnd = (e) => {
            if (e.propertyName !== "max-height") return;
            updateAncestors(content);
        };
        
        content.addEventListener("transitionend", onTransitionEnd, { once: true });
    });
}

//footer stuff
const byhumansStrings = [
    "Website by humans, for humans",
    "Website by me, not AI",
    "Website 100% made by humans",
    "Website by a real human",
];

//randomize footer text
document.getElementById("byhumans").innerText = byhumansStrings[Math.floor(Math.random() * byhumansStrings.length)];