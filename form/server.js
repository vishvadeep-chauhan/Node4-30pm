const express = require("express");

const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.post("/submit", (req, res)=> {
    const {name, email, number, message } = req.body;

    console.log(req.body); 


    res.redirect(`/result.html?name=${name}&email=${email}&number=${number}&message=${message}`);
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});