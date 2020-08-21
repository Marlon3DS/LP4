(function LoadPage() {
    loadMenu();
})();

function loadMenu() {
    var pages = getPages();
    var menu = document.getElementById("navbar-pages");
    pages.forEach((page) => {
        var link = document.createElement("a");
        link.setAttribute("onclick", "redirectPage('" + page.path + "')");
        if (getActivePage(page)) link.setAttribute("class", "active-page");
        link.textContent = page.label;
        menu.appendChild(link);
    });
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
    if (pathName == host + page.path) {
        return "active-page";
    }
    return "";
}
