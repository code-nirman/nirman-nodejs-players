const express = require('express');

const router = express.Router();

router.post('/login', (req,res,next) => {
  res.status(200);
   res.send({
      user: 'atul@gmail.com'
   });
});


router.get('/login', (req, res, next) => {
   res.status(200);
   res.send({
      user: 'atul@gmail.com'
   });
});


module.exports = router;