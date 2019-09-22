var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "static/build")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+ './static/build/index.html'));
})

const port = process.env.PORT || 3000;
app.listen(port);