const express = require('express');



const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const porta = 3000;



//Body Parser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');





app.use(express.static(path.join(__dirname, "public")))




app.get("/", function(req, res) {
    res.render("index",{ title: 'Home' });
})


app.get("/contato", function(req, res) {
    res.render("contato",{ title: 'Contato' });
})

app.get("/portfolio", function(req, res) {
    res.render("portfolio",{ title: 'Portfolio' });
})

app.post('/formulario', (req, res) => {
    let email = require("./emailForm");

    email(req.body.nome, req.body.mensagem);
    res.render("formularioEnviado",{ title: 'Mensagem Enviada' })

});








app.listen(porta, function() { console.log("Servidor rodando na porta:" + porta); })