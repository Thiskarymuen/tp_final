var express = require('express');
var router = express.Router();
var profesionalesModel = require('../../models/profesionalesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function (req, res, next) {

    var profesionales = await profesionalesModel.getProfesionales();

    profesionales = profesionales.map(profesional => {
        if (profesional.imagen) {
            const imagen = cloudinary.image(profesional.imagen, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...profesional,
                imagen
            }
        } else {
            return {
                ...profesional,
                imagen: ''
            }
        }
    });

    res.render('admin/profesionales', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        profesionales
    });
});

router.get('/agregar', (req, res, next) => {

    res.render('admin/agregar', {
        layout: 'admin/layout',
    });
});

router.post('/agregar', async (req, res, next) => {
    try {

        var imagen = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            imagen = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.nombre != "" && req.body.apellido != "" && req.body.titulo != "" && req.body.universidad != "" && req.body.matricula != "") {
            await profesionalesModel.insertProfesionales({

                ...req.body,
                imagen

            });
            res.redirect('/admin/profesionales')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se registró al profesional'
        })
    }
})

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    let profesional = await profesionalesModel.getProfesionalesById(id);
    if (profesional.imagen) {
        await (destroy(profesional.imagen));
    }

    await profesionalesModel.deleteProfesionalesByID(id);
    res.redirect('/admin/profesionales');
})

router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var profesional = await profesionalesModel.getProfesionalesById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        profesional
    })
});

router.post('/modificar', async (req, res, next) => {
    try {

        let imagen = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            imagen = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                imagen = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        var obj = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            titulo: req.body.titulo,
            universidad: req.body.universidad,
            matricula: req.body.matricula,
            imagen
        }
        console.log(obj)

        await profesionalesModel.modificarProfesionalById(obj, req.body.id);
        res.redirect('/admin/profesionales');
    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modificó el profesional'
        })
    }
})

module.exports = router;