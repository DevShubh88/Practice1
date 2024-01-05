var express = require('express');
var app = express();
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.send("welcome");
});
app.listen(5001);
console.log("listening on 5001");