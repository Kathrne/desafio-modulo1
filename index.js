const nodemailer = require('nodemailer');

// Configuración del transporte (SMTP) para Outlook
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'michelle.linars@outlook.com', // Tu correo de Outlook
    pass: '********' // Tu contraseña
  }
});

// Detalles del correo electrónico
const mailOptions = {
  from: 'michelle.linars@outlook.com', // Remitente
  to: 'j.william03@hotmail.com', // Destinatario
  subject: ' Implementación de servidor de correos.', // Asunto
  text: ' ¡Servidor de correo funcionando excelente!' // Cuerpo del correo
};

// Enviar el correo electrónico
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Correo enviado: ' + info.response);
  }
});
