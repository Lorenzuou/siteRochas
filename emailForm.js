var emailForm = function mandarEmail(EMAIL_VISITANTE, mensagem) {
    require('dotenv').config();


    const nodemailer = require("nodemailer");
    let user = process.env.EMAIL_EMPRESA;
    let pass = process.env.SENHA_EMAIL;
   
    //instacia o servidor SMPT
    const email = nodemailer.createTransport({

        host: 'smtp.office365.com',
        port: 587,
        secureConnection: false, 
        auth: {
            user: user,  //lorenzoscaramussa@hotmail.com
            pass: pass //senha do meu email 

        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

  
    // Envia o email
    email.sendMail({
        from: user, 
        to: user, 
        replyTo: EMAIL_VISITANTE,
        subject: "Mensagem de um usuário",
        text: mensagem + "\n\n\n\n\nEmail de: " + EMAIL_VISITANTE
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    });

}

module.exports = emailForm;