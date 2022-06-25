const fs = require('fs');

const path = require('path');

const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views')) // path template file
app.set('view engine', 'ejs'); // setting ejs template
// replace html to ejs

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'views', 'index.html');
    // res.sendFile(htmlFilePath);
    res.render('index'); // name of path
});

app.get('/restaurants', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
    // res.sendFile(htmlFilePath);
    const filePath = path.join(__dirname, 'data', 'restaurants.json'); // data 폴더의 json 폴더의 경로를 가져온다

    const fileData = fs.readFileSync(filePath); // json 파일이 있는 경로로 가서 해당 파일의 내용을 읽는다
    const storedRestaurants = JSON.parse(fileData); // 해당 파일의 내용을 json 형식으로 변환하여 저장한다.
    res.render('restaurants', { numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants });
});

app.get('/recommend', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
    // res.sendFile(htmlFilePath);
    res.render('recommend');
});

app.post('/recommend', function (req, res) {
    const restaurant = req.body;
    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    storedRestaurants.push(restaurant);

    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

    res.redirect('/confirm');
})

app.get('/confirm', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
    // res.sendFile(htmlFilePath);
    res.render('confirm');
});

app.get('/about', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'views', 'about.html');
    // res.sendFile(htmlFilePath);
    res.render('about');
});



app.listen(3000);