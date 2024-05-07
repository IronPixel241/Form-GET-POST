const express = require("express");
let app = express();
let port = 8081;

app.use(express.urlencoded({extended : true}));
app.use(express.json());    // If the outgoing response is in json format

app.listen(port , () => {
    console.log(`Listening on the port ${port}`);
});

app.get("/register" , (req , res) => {
    let {user , password} = req.query;
    res.send(`Standard GET response. Welcome ${user}`);
});

app.post("/register" , (req , res) => {
    let {user , password} = req.body;
    res.send(`Standard POST response. Welcome ${user}`);
});
