
const Link = require("../models/Link") // IMPORTANDO MODELO DE LINK

const redirect = async (req, res) => {
    let title = req.params.qualquercoisa //VAI PEGAR O VALOR QUE VEM DEPOIS DA BARRA "/:"
    try {
        let docs = await Link.findOneAndUpdate({ title: title },{$inc: {click:1}})// PRCURANDO NO BANCO DE DADOS PELO VALOR DE TITLE EM GET
        res.redirect(docs.url) // Redirecionando para o documento
    } catch (error) {
        res.send(error)
    }

}

const addLink = async (req, res) => {
    let docs = new Link(req.body) //Passando o objeto da requisição 
    console.log(docs)
    try {
        let doc = await docs.save() // salvando o objeto ou documento na coleção do banco de dados
        res.redirect('/') // Resposta
    } catch (error) {
        res.send(error)
    }
}

const allLinks = async (req, res) => {
   

    try {
        let doc= await Link.find({}) // Mostrando todos os documentos da coleção Link
        res.render('all', {doc:doc}) // renderizando os elementos de doc em all.ejs
    } catch (error) {
        res.send(error)

    }
}

const deleteLink = async(req,res)=>{
    let id =req.params.id
    if(!id){
        id=req.body.id
    }
    try{
        await Link.findByIdAndDelete(id) //Vendo o elemento pelo id na coleção e deletando de acordo com o parâmetro (id)
        res.send(id)
    }catch(error){
        res.status(404).send(error)
    }
}

const loadLink = async(req,res)=>{
  
    let id =req.params.id
    if(!id){
        id=req.body.id
    }
    try{
      let doc = await Link.findById(id) //Vendo o elemento pelo id com o parâmetro (id)
       res.render("edit", { error:false, body:doc}) //Passando membros de doc para body
    }catch(error){
        res.status(404).send(error)
    }
}

const editLink = async (req,res)=>{
    let link ={}
    link.title = req.body.title
    link.description = req.body.description
    link.url = req.body.url

    let id = req.params.id
    if(!id){
        id = req.body.id
    }
    console.log(id)
    try{
        let doc = await Link.updateOne({_id:id}, link) //Buscando elemento pelo id e substituindo membros por membros de link
        res.redirect("/")
    }catch(error){
        res.render('edit', {error,body: req.body})
    }
}

module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink} // exportando como um objeto, caso tenha outras funções para serem chamadas como método
