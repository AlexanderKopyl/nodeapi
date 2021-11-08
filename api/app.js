const express = require('express');
const app = express();
const port = 3000;
let route = require("./route");

app.use("/api", route);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
