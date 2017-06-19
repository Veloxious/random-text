const express = require('express')
const app = express()
var loremIpsum = require('lorem-ipsum')

app.get('/lorem', function(req, res){
  var output = loremIpsum({
    count: 3
   ,units: 'paragraphs'
   ,format: 'html'
  })

  res.send(output)
})

app.get('/lorem/:paraNum', function(req, res){
  var numPara = parseInt(req.params.paraNum)
  var output = loremIpsum({
    count: numPara
   ,units: 'paragraphs'
   ,format: 'html'
  })

  res.send(output)
})

app.listen(3000, function(){
  console.log('ojai, look at http://0.0.0.0:3000')
})
