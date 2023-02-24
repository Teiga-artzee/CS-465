var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');


router.get('/trips/:tripcode',(req, res) => {
    if(!!req.tripCode) {
        return ctrlMain.tripsFindByCode(req, res);
    }
    return ctrlMain.tripsList(req, res);
})

module.exports = router;
