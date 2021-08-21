> show dbs

> db.createCollection("someocollection") Criando Coleção no DB

> db  // Vendo qual banco está
test // o banco
> use local // Apontando para outro banco

> db.dropDatabase() // Excluindo banco de dados que está atualmente

switched to db local // Sinal que mudou

> db.nomedacoleção.drop() // excluindo uma coleção do banco de dados

 >db.users.insertMany // Inserindo objetos na coleção

 >db.users.insertOne // Inserindo um objeto na coleção
> db 
local // novo local de banco de dados

//selecionando coleções

>db.users.find()  // Retorna todos os objetos da coleção users

>db.users.find().pretty()  // Retorna todos os objetos organizados da coleção users

>db.users.findOne() // Retorna o primeiro objeto da coleção users 

>db.users.find().sort({name:1}).pretty() // Retornando objetos do menor para o maior

>db.users.find({name:"José"}).pretty() //  Retornando todos os objetos com o nome José

>db.users.find({name:"José"}).pretty()

//Fazendo updates 

> db.users.updateOne({name:"Cornélio"},{$set:{type: "admin"}}) // Adiciona novo elemento à um objeto na coleção

> db.users.updateOne({name:"Cornélio"},{$set:{type: "admin"}}) // adicionando a todos os objetos
> db.users.updateOne({name:"Cornélio"},{$unset:{type: ""}}) // removendo item do objeto

> db.users.update({name:"Cornélio"},{name:"Vinicius", password:"325341"}, {upsert:true}}) // Faz um update do objeto
>se Não existir, criará um novo objeto com os atributos

>db.users.updateMany({},{$rename:{visits: "views"}}) //renomeando itens de  todos os objetos na collection "users" que tenha visits como um dos atributos

>db.users.updateMany({name:"},{$rename:{visits: "views"}} // Renomeando apenas em um objeto na collection

> db.users.updateOne({name:"José"}, {$inc: {views:5}}) // incrementando dados

//Deletando itens do objeto
>db.nomeDaCollection.deleteOne({name:’Lucas Rosa’}): Apaga o primeiro documento que tiver uma chave com “Lucas Rosa”.

>db.nomeDaCollection.deleteMany({type:’admin’}): Apaga todos os documentos que tiver uma chave type com admin. 


// VISITAR O SITE https://mongoosejs.com/ para documentação do mongoose