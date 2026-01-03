for (let i = 0; i < gallery[0].sections.length; i++) {
    let section = gallery[0].sections[i];
    document.writeln("<button class=\"collapsible\">" + section.sectionName + "</button>");
    document.writeln("<div class=\"collapsiblecontent\">");
    document.writeln("<div class=\"galleryimagecontainer\">");

    for (let j = 0; j < section.sectionContent.length; j++) {
        let art = section.sectionContent[j];

        document.writeln("<div class=\"galleryimage\">");
        document.writeln("<img src=\"" + art.image + "\" class=\"zoomcursor\" subtext=\"" + art.subtext + "\" onclick=\"maximizeImage(this)\">");
        document.writeln("</div>");
    }

    document.writeln("</div>");
    document.writeln("<br>");
    document.writeln("</div>");
}