const express = require("express");
const { Greatings } = require("./controller/WelcomeController");
const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log("API running at http:localhost:8080/"));
app.use(express.json());

app.get('/', Greatings);
