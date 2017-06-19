const express = require('express');
const app = express();

app.get('/hello', function(req, res){
  res.send('Hello there!')
});

app.get('/goodbye', function(req, res){
  res.send('goodbye!')
});

app.listen(3000, function(){
  console.log('ojai, look at http://0.0.0.0:3000')
})
