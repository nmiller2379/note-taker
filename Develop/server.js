const express = require("express")


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

require("Develop/routes/apiRoutes.js");
require("Develop/routes/htmlRoutes.js");

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});