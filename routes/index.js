var express = require('express');
var fs = require('fs');
var sendMail = require('./sendmail.js')
var Response = require('../models/response.js')
var router = express.Router();
var prompt = "Think about the things that are important to you. Perhaps you care about creativity, family relationships, your career, or having a sense of humour. Pick two or three of these values and write a few sentences about why they are important to you. You have fifteen minutes. It could change your life."


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/begin',function(req,res){
  var user_name = req.param('name');
  var user_email = req.param('useremail');
  var teacher_email = req.param('teacheremail');
  res.render('editor',{name: user_name, useremail: user_email, teacheremail: teacher_email});
});

router.get('/spread',function(req,res){
  res.render('spread');
});


router.post('/submit',function(req,res){
  var writing = req.param("writing");
  var name = req.param('name');
  var teacher_email = req.param('teacheremail');
  var user_email = req.param('useremail');
  var response = new Response({
    writing: writing,
    name: name,
    to: teacher_email,
    from: user_email,
    created_at: new Date()
  });
  response.save(function(err){
    if(err) throw err;
  });
  console.log(response);
  writing = writing.replace(/(?:\r\n|\r|\n)/g, '<br />');
  //sendMail.sendWriting(teacher_email,writing,name);
  //sendMail.sendWritingConfirmation(user_email,writing,name);
  res.redirect('/spread');
});

module.exports = router;
