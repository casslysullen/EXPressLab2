"use strict";
const express = require("express");
const app = express();
const routes = require("./routes/routes")
let port = 3000;

app.use(express.static(__dirname + "/dist"));
app.use(express.json());
// app.use('/api', routes);

app.get("*", routes);

app.post("*", routes);

app.put("*", routes);

app.delete("*", routes);

app.listen(port, (req, res) => {
    console.log(`Server is running: ${port}`);
});