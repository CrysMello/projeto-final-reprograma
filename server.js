

const app = require("./app")



const PORT = process.env.PORT || 8080;

app.listen(PORT, function (erro) {
  if (erro) {
    console.log("Servirdor com erro,não diga que o servidor está perdido, tente outra vez! ")
  } else {
    console.log(`Servidor bombando na porta 8080`)
  }
    })