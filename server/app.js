const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log("listening to port", +PORT);
});

module.exports = app;
