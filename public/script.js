document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("heading");
    const button = document.getElementById("btn");
    const buttonBlog = document.getElementById("btnBlog");

    button.addEventListener("click", () => {
        heading.innerText = "You Clicked the Button!";
    });
});

document.getElementById("btn").addEventListener("click", () => {
    window.location.href = "/newpage.html";
    //window.location.href = "https://patrykwenz-4.github.io/nodePortfolio/newpage.html";

});

document.getElementById("btnBlog").addEventListener("click", () => {
    window.location.href = "/blog.html";
    //window.location.href = "https://patrykwenz-4.github.io/nodePortfolio/newpage.html";

});
