const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const mongoose = require('mongoose');

// Use environment variables for security (process.env.MONGO_URI)
const dbURI = "mongodb://localhost:27017/myBlogDB";

mongoose.connect(dbURI)
  .then(() => {
    console.log("Database se connection ho gaya! ✅");
  })
  .catch((err) => {
    console.error("Database connection failed: ", err);
    process.exit(1); // Exit process if DB connection fails
  });