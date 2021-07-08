require("dotenv").config
const mongoose = require("mongoose");


//conectando mongodb

const connect = async() => {
  
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    console.log("Database conectada com sucesso")
  }
  catch (err){
  console.log(err.message)
}
}

module.exports = {connect}