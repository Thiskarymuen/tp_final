var express = require('express');
var router = express.Router();
var profesionalesModel = require('./../models/profesionalesModel');
var cloudinary = require('cloudinary').v2;

var nodemailer = require('nodemailer');

router.get('/profesionales', async function (req, res, next) {

    var profesionales = await profesionalesModel.getProfesionales();

    profesionales = profesionales.map(profesionales => {
        if (profesionales.imagen) {
            const imagen = cloudinary.url(profesionales.imagen, {
                width: 700,
                height: 600,
                crop: 'fill'
            });
            return {
                ...profesionales,
                imagen
            }
        } else {
            return {
                ...profesionales,
                imagen: ''
            }
        }
    });

    res.json(profesionales);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'nanocastr8@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} ${req.body.apellido} (${req.body.genero}) se contactó a traves de la web y quiere más información a este correo: ${req.body.email} <br> Su Telefono es: ${req.body.telefono}  <br> Es de la provincia de: ${req.body.provincia} <br> Quiere una terapia ${req.body.terapia} de manera ${req.body.modo}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje Enviado'
    });

});


module.exports = router;