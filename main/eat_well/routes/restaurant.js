const express = require('express');
const router = express.Router();

const resData = require('../util/restaurant-data')

router.get('/restaurants', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
    // res.sendFile(htmlFilePath);
    // const filePath = path.join(__dirname, 'data', 'restaurants.json'); // data 폴더의 json 폴더의 경로를 가져온다

    // const fileData = fs.readFileSync(filePath); // json 파일이 있는 경로로 가서 해당 파일의 내용을 읽는다
    // const storedRestaurants = JSON.parse(fileData); // 해당 파일의 내용을 json 형식으로 변환하여 저장한다.
    const storedRestaurants = resData.getStoredRestaurants();
    res.render('restaurants', { numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants });
});

router.get('/restaurants/:id', function (req, res) {
    const restaurantId = req.params.id;
    const storedRestaurants = resData.getStoredRestaurants();

    for (const restaurant of storedRestaurants) {
        if (restaurant.id === restaurantId) {
            return res.render('restaurants-detail', { restaurant: restaurant });
        }
    }

    // 페이지를 찾을 수 없는 경우 반환하는 페이지, 위의 for룹에서 return이 안된 경우는 일치하는 id가 없는 경우임
    return res.status(404).render('404');
});

router.get('/recommend', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
    // res.sendFile(htmlFilePath);
    res.render('recommend');
});

router.post('/recommend', function (req, res) {
    const restaurant = req.body;
    restaurant.id = uuid.v4();
    const restaurants = resData.getStoredRestaurants();

    restaurants.push(restaurant);

    resData.storeRestaurants(restaurants);

    res.redirect('/confirm');
})

router.get('/confirm', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
    // res.sendFile(htmlFilePath);
    res.render('confirm');
});

module.exports = router;