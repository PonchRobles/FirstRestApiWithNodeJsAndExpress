const {Router} = require('express');
const router = Router();

router.get('/test',(req, res)=>{
    const data = {
        "name": "Poncho",
        "website" : "Poncho.com"
    };
    res.json(data);
})

module.exports = router;