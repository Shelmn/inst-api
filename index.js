let express = require('express');
let app = express();
let http = require('http');
let fs = require('fs');

http.get("http://google.com", res => {
    console.log(res.rawHeaders);
});