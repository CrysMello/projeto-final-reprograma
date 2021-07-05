const mongoose = require("mongoose");


//conectando mongodb

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(console.log("Database conectada com sucesso"))
    .catch((err) => console.error);
};

module.exports = {connect}