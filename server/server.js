const express = require("express");
const app = express();

require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }));

const allMyJokeRoutes = require("./routes/joke.routes")
allMyJokeRoutes(app);

app.listen( 8000,() => console.log("Server Running on Port 8000") );