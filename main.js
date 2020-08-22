var pages = getPages();

(function LoadPage() {
    var menu = document.getElementById("navbar-pages");
    var cards = document.getElementById("main-pages");
    pages.forEach((page) => {
        menu.appendChild(getMenuLink(page));
        if (page.path != "/") cards.appendChild(getPageCard(page));
    });
})();

function getMenuLink(page) {
    var link = document.createElement("a");
    link.setAttribute("onclick", "redirectPage('" + page.path + "')");
    if (getActivePage(page)) link.setAttribute("class", "active-page");
    link.textContent = page.title;
    return link;
}

function getPageCard(page) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    var title = document.createElement("h2");
    title.textContent = page.title;
    card.appendChild(title);
    var subtitle = document.createElement("h5");
    subtitle.textContent = page.subtitle + " - " + page.date;
    card.appendChild(subtitle);
    var imgBox = document.createElement("div");
    imgBox.setAttribute("class", "fakeimg");
    var img = document.createElement("img");
    img.setAttribute("src", "./images/card-php.png");
    img.setAttribute("alt", "PHP Logo");
    imgBox.appendChild(img);
    card.appendChild(imgBox);
    var resume = document.createElement("p");
    resume.textContent = page.resume;
    card.appendChild(resume);
    var link = document.createElement("a");
    link.setAttribute("onclick", "redirectPage('" + page.path + "')");
    link.setAttribute("class", "btn btn-details");
    link.textContent = "Detalhes";
    card.appendChild(link);
    return card;
}

function getPages() {
    return [
        { title: "Home", subtitle: "", date: "", resume: "", path: "/" },
        {
            title: "1ª Aula",
            subtitle: "Revisão de HTML e CSS",
            date: "20/08/2020",
            resume:
                "Revisão de HTML e CSS loren ipsum adoajdlndlasjnljn fljsnlanldfnalsndlanfljc adlcj adlncaldnalsdnlasn",
            path: "/Aula-1/",
        },
    ];
}

function redirectPage(path) {
    var baseUrl = "http://localhost/lp4";
    window.location.href = baseUrl + path;
}

function getActivePage(page) {
    var host = "/lp4";
    var pathName = window.location.pathname;
    if (pathName == host + page.path) {
        return "active-page";
    }
    return "";
}
