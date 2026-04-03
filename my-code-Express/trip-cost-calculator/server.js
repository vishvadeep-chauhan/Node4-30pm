 

// Tech blogs and content hubs often need clean URLs. Create a route that takes an articleTitle and an authorName as parameters, and converts them into a clean, SEO-friendly slug (lowercase, spaces replaced with hyphens). -->

// route requirement: for a tech blog or content hub, the endpoint should accept `articleTitle` and `authorName` as route parameters, then build an SEO-friendly slug from them. “SEO-friendly slug” means converting text to lowercase and replacing spaces with hyphens, so `Cool Article` + `Jane Doe` becomes something like `cool-article-jane-doe` for cleaner URLs. It’s a spec/instruction, not executable code.




const express = require("express")
const app = express();

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`port is runing on localhost:${PORT}`)
});

app.get("/blog/:articleTitle/:authorName", (req,res) =>{
    const {articleTitle,authorName } = req.params;

    const makeSlug = (text) => { return text.toLowerCase().split(" ").join("-") }

    const Slug = `${makeSlug(articleTitle)}-${makeSlug(authorName)}`

    res.json({
        articleTitle,
        authorName,
        Slug
    })

})

