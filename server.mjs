import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("public/index.html", { root: "." });
});

app.get("/newpage", (req, res) => {
    res.sendFile("public/newpage.html", { root: "." });
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});
