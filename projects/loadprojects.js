for (let i = 0; i < projects[0].sections.length; i++) {
    let section = projects[0].sections[i];
    document.writeln("<button class=\"collapsible\">" + section.sectionName + "</button>");
    document.writeln("<div class=\"collapsiblecontent\">");

    for (let j = 0; j < section.sectionContent.length; j++) {
        let project = section.sectionContent[j];
        document.writeln("<section id=" + project.id + " class=\"project\">");
        document.writeln("<div class=\"projecttitle\">");
        document.writeln("<h1 class=\"trimtop trimbottom projectname\">" + project.name + "</h1>");
        document.writeln("<h5 class=\"muted trimtop trimbottom projectdate\">" + project.date + "</h5>");
        document.writeln("<button class=\"transparent nopadding alignright\" class=\"copyprojectlink\" onclick=\"copyProjectLink('" + project.id + "')\">");
        document.writeln("<img class=\"svgmuted\" src=\"/img/link.svg\" width=\"32\" height=\"32\">");
        document.writeln("</button>");
        document.writeln("</div>");
        document.writeln("<div class=\"projectfunfactscontainer\">");
        for (let k = 0; k < project.funfacts.length; k++) {
            document.writeln("<p class=\"projectfunfact\">" + project.funfacts[k] + "</p>");
        }
        document.writeln("</div>");
        document.writeln(project.content);
        document.writeln("</section>");
        
        if(j != section.sectionContent.length - 1){
            document.writeln("<br>");
            document.writeln("<hr>");
            document.writeln("<br>");
        }
    }

    document.writeln("</div>");
}

//focus on project from link hash
function openProjectFromHash(){
    const id = decodeURIComponent(window.location.hash.slice(1));
    if(!id) return;

    const project = document.getElementById(id);
    if(!project) return;

    const panels = [];
    let parent = project.parentElement;

    while(parent){
        if(parent.classList.contains("collapsiblecontent")){
            panels.push(parent);
        }
        parent = parent.parentElement;
    }

    for(const panel of panels){
        const button = panel.previousElementSibling;

        if(button && button.classList.contains("collapsible")){
            button.classList.add("collapsibleactive");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    setTimeout(() => {
        for(const panel of panels){
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        const top = project.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
    }, 150);
}

window.addEventListener("DOMContentLoaded", openProjectFromHash);
window.addEventListener("hashchange", openProjectFromHash);