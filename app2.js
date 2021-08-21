/*====================== BUSCANDO DOCUMENTOS ======================= */

const path= require("path")
const express = require("express")
const app = express()
const port = 4000
const mongoose = require("mongoose")
const linkRoute = require("./routes/linkRoute")


mongoose.connect("mongodb://localhost/newLinks", //conectando ao banco de dados newLinks
    { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection

db.on("error", () => { console.log("houve um err") })
db.once("open", () => {console.log("Banco carregado")})

app.set('view engine', 'ejs')

app.set ('views',path.join(__dirname,'template'))// setando view do ejs para o arquivo template 
app.use("/", linkRoute)

app.listen(port, () => {
    console.log(`Running server in port ${port}`)
})
