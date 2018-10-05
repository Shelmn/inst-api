let express = require('express');
let app = express();
let http = require('http');
let fs = require('fs');
app.use("/", express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile("/index.html");
});

app.listen(process.env.PORT || 5000, () => console.log('server started on 5000 port'));