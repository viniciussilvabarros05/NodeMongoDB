const { urlencoded } = require("express")
const express = require("express")
const router = express.Router()


const linkController = require("../controles/linkController")



router.get("/add", (req,res)=>{ res.render("template")}) //Chamando o arquivo ejs em templates

router.get("/", linkController.allLinks)// Rota para renderizar todos os links do DB


router.get("/:qualquercoisa", linkController.redirect)// Acessando links por essa rota passando o título


router.get("/edit/:id", linkController.loadLink)

router.post("/",express.urlencoded({extended:true}), linkController.addLink)

router.post("/edit/:id",express.urlencoded({extended:true}), linkController.editLink)

router.delete("/:id", linkController.deleteLink)

router.delete("/", express.json(), linkController.deleteLink)// chamando o middleware express.json()


module.exports = router