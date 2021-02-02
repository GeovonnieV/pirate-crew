const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
// connect DB
require("./config/pirate.config");
// connect routes
require("./routes/pirate.route")(app);

app.listen(port, () => {
    console.log(`App is listenig on port ${port}`)
});