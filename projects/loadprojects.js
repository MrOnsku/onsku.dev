for (let i = 0; i < projects[0].sections.length; i++) {
    let section = projects[0].sections[i];
    document.writeln("<button class=\"collapsible\">" + section.sectionName + "</button>");
    document.writeln("<div class=\"collapsiblecontent\">");

    for (let j = 0; j < section.sectionContent.length; j++) {
        let project = section.sectionContent[j];
        document.writeln("<section>");
        document.writeln("<div class=\"projecttitle\">");
        document.writeln("<h1 class=\"trimtop trimbottom projectname\">" + project.name + "</h1>");
        document.writeln("<h5 class=\"muted trimtop trimbottom projectdate\">" + project.date + "</h5>");
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