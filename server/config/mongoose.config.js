const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/jokesAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then( () => console.log("Database Connection Established"))
.catch( (err) => console.log("Database Connection Error", err));