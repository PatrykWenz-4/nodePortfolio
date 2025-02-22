document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("heading");
    const button = document.getElementById("btn");

    button.addEventListener("click", () => {
        heading.innerText = "You Clicked the Button!";
    });
});

document.getElementById("btn").addEventListener("click", () => {
    window.location.href = "/public/newpage.html";
});
