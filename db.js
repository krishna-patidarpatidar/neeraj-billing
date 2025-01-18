const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://krishnapatidar115:ywuNb6xr3NGyyuv8@databaseserver.6y6iw.mongodb.net/neeraj-bill";

mongoose
  .connect(DB_URL)
  .then((dbres) => {
    console.log(" DataBase connected");
  })
  .catch((error) => {
    console.log("error", error);
  });