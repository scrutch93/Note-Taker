const express = require('express');
const path = require("path");
const fs = require("fs")

const app = express();

const PORT = process.env.PORT || 8000;

//middleware (settings)
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"))

//routing 
// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/notes.html"))
})

app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data))
    })
})

app.post("/api/notes", (req, res) => {
    console.log(req.body)
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        let arr = JSON.parse(data)
        arr.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(arr), err => {
            if(err) throw err;
            res.json("sonic")
        })
    })
})

app.listen(PORT, function(){
    console.log('super sonic')
})
