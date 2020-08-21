(function LoadPage() {
    loadMenu();
})();

function loadMenu() {
    var pages = getPages();
    var menu = document.getElementById("navbar-pages");
    var list = document.createElement("ul");
    pages.forEach((page) => {
        var row = document.createElement("li");
        var link = document.createElement("span");
        link.setAttribute("onclick", "redirectPage('" + page.path + "')");
        link.setAttribute("class", getActivePage(page));
        link.textContent = page.label;
        row.appendChild(link);
        list.appendChild(row);
    });
    menu.appendChild(list);
}

function getPages() {
    return [
        { label: "Home", path: "/" },
        { label: "Aula 1", path: "/Aula-1/" },
    ];
}

function redirectPage(path) {
    var baseUrl = "http://localhost/lp4";
    window.location.href = baseUrl + path;
}

function getActivePage(page) {
    var host = "/lp4";
    var pathName = window.location.pathname;
    console.log(pathName);
    console.log(host + page.path);
    if (pathName == host + page.path) {
        return "active-page";
    }
    return "";
}
