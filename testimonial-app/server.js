const express = require('express');

const fs = require("fs")

const path = require('path');
const multer = require('multer');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');   // ✅ folder path
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // ✅ file name
  }
});

const upload = multer({storage});

app.get('/', (req, res) => {
    res.redirect('/form');

});

app.get('/form', (req, res) => {
  res.render('form');
});


app.post('/submit', upload.single('image'), (req, res) => {
  const { name, message } = req.body;

  const newData = {
    name,
    message,
    image: req.file.filename
  };

  const filePath = path.join(__dirname, 'data', 'testimonials.json');

  let data = [];

  if (fs.existsSync(filePath)) {
  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    data = fileData ? JSON.parse(fileData) : [];
  } catch (err) {
    data = [];
  }
}

  data.push(newData);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.redirect('/testimonials');
});

app.get('/testimonials', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'testimonials.json');

  let data = [];

  if (fs.existsSync(filePath)) {
    try {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      data = fileData ? JSON.parse(fileData) : [];
    } catch (err) {
      data = [];
    }
  }

  res.render('testimonials', { testimonials: data });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
