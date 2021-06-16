
const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect("mongodb://localhost/noderestfull", {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
        .then(console.log("Database conectada com sucesso"))
        .catch(err => console.error)
}
module.exports = {connect}
