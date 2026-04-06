const express = require("express");
const app = express();

let port = 3000;

/* ROOT */
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

/* OTHER ROUTES */
app.get("/path", (req, res) => {
    res.json({ message: "welcome" });
});

app.get("/about", (req, res) => {
    res.json({ data: "about page" });
});


app.get("/contact", (req, res) => {
    res.json({
        success: true,
        data: "contact page"
    });
});

/* START SERVER */
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});