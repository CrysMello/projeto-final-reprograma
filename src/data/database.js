const mongoose = require("mongoose");


//conectando mongodb

const connect = () => {
  mongoose
    .connect("MONGO_URI", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Database conectada com sucesso"))
    .catch((err) => console.error);
};

module.exports = { connect };
