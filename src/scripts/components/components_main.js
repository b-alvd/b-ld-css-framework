const mainContent = document.querySelector("main");
const pages = document.querySelectorAll("main > section");

const getPage = (hash) => {
    const page = Array.from(pages).find((pageElement) => pageElement.id === hash);
    if (page) {
        pages.forEach((pageElement) => pageElement.classList.remove("active"));
        page.classList.add("active");
        mainContent.innerHTML = page.innerHTML;
        mainContent.classList.remove(...mainContent.classList);
        mainContent.classList.add(hash);
        mainContent.classList.add("components");
    }
};

window.addEventListener("hashchange", () => {
    const hash = window.location.hash.slice(1);
    getPage(hash);
});

getPage(window.location.hash.slice(1));
