var express = require('express');
var router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MINI MESSAGE-BOARD', messages });
});
router.get('/new', (req, res) => res.render('form'))

//@Method POST
router.post('/new', (req, res, next)=> {
  messages.push({
    text: req.body.theMessage,
    user: req.body.theName, 
    added: new Date() })

  res.redirect('/')
}) 

module.exports = router;
