/*===================== FORMAS DE CONECTAR NO BANCO DE DADOS ======================== */
/*mongoose.connect("mongo://localhost/blog").then(db =>{
    console.log(db)
}).catch(error=>{
    console.log(error)
}) 

ou


 mongoose.connect("mongodb://localhost/blog",(err,db)=>{ // conectando o node ao banco de dados 
     console.log(err)
     console.log(db)
})
*/


const express = require("express")
const app = express()
const port = 3000
const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const linkSchema = new mongoose.Schema({ //Criando modelo
    title: {type:String, required:true},
    description: String,
    url: {type:String, required:true},
    click:{type:Number, default:0}
})


const Person = mongoose.model("Person",personSchema)//Criando uma coleção "Person" com modelo linkSchema no Banco de dados

let person = new Person({
    name:"Vinícius",
    age:20
})

person.save().then(doc=>{ //Salvando 
    console.log(doc)
}).catch(err=>{console.log(err)})




// const Link= mongoose.model("Link",linkSchema) //Criando uma coleção "Link" com modelo linkSchema no Banco de dados

// let link = new Link({ //Adicionando objeto na collection "Link"
//     title:"estudobr",
//     description:"Link para estudos",
//     url:"https://facebook.com",
//     click:0
// })

// link.save().then(doc=>{
//     console.log(doc)
// }).catch(err=>{console.log(err)})

mongoose.connect("mongodb://localhost/newLinks",
    { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection

db.on("error", () => { console.log("houve um erro") })
db.once("open", () => { 
    
    console.log("Banco carregado") 

    app.get("/:title",(req,res)=>{
        let title = req.params.title
    })


})



