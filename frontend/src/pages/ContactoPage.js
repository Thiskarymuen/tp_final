import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        genero: '',
        provincia: '',
        terapia: '',
        modo: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm)

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false)
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <div className='container-sm'>
            <div class="pt-5 text-center">

                <h2>Formulario de Contacto</h2>
                <p class="lead fst-italic">Porfavor llene los datos y automáticamente se le enviaran los contactos del Profesional a su Mail.</p>
            </div>

            <div class="container-sm col-md-7 col-lg-8 shadow-lg p-5 mb-5 bg-dark rounded">
                <h4 class="mb-3 ms-5 text-white fst-italic">Contactanos</h4>
                <form action='/contacto' method='post' onSubmit={handleSubmit} class="needs-validation ms-5" novalidate="">
                    <div class="row g-3 ms-5">
                        <div class="col-sm-5">
                            <label for="firstName" class="form-label text-white">Nombre</label>
                            <input type="text" class="form-control" name="nombre" placeholder="" value={formData.nombre} onChange={handleChange} required=""></input>

                        </div>

                        <div class="col-sm-5">
                            <label for="lastName" class="form-label text-white">Apellido</label>
                            <input type="text" class="form-control" name="apellido" placeholder="" value={formData.apellido} onChange={handleChange} required=""></input>

                        </div>
                        <div class="col-10">
                            <label for="email" class="form-label text-white">Email</label>
                            <input type="email" class="form-control" name="email" placeholder="mail@ejemplo.com" value={formData.email} onChange={handleChange}></input>

                        </div>

                        <div class="col-10">
                            <label for="email" class="form-label text-white">Teléfono de contacto</label>
                            <input type="number" class="form-control" name="telefono" placeholder="" value={formData.telefono} onChange={handleChange}></input>

                        </div>




                        <div class="col-md-5">
                            <label for="country" class="form-label text-white">Género</label>
                            <select class="form-select" name="genero" required="" value={formData.genero} onChange={handleChange}>
                                <option selected disabled value="">. . .</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="No Binario">No Binario</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>

                        <div className="col-md-5 position-relative">
                            <label for="validationTooltip04" className="form-label text-white">Provincia</label>
                            <select className="form-select" value={formData.provincia} onChange={handleChange} id="validationTooltip04" name="provincia" required>
                                <option selected disabled value="">. . .</option>
                                <option>Buenos Aires</option>
                                <option>Ciudad Autónoma de Buenos Aires</option>
                                <option>Catamarca</option>
                                <option>Chaco</option>
                                <option>Chubut</option>
                                <option>Córdoba</option>
                                <option>Corrientes</option>
                                <option>Entre Rios</option>
                                <option>Formosa</option>
                                <option>Jujuy</option>
                                <option>La Pampa</option>
                                <option>La Rioja</option>
                                <option>Mendoza</option>
                                <option>Misiones</option>
                                <option>Neuquén</option>
                                <option>Rio Negro</option>
                                <option>Salta</option>
                                <option>San Juan</option>
                                <option>San Luis</option>
                                <option>Santa Cruz</option>
                                <option>Santa Fe</option>
                                <option>Santiago Del Estero</option>
                                <option>Tierra del Fuego</option>
                                <option>Tucumán</option>
                            </select>
                        </div>

                        <div class="col-md-5">
                            <label for="country" class="form-label text-white">Tipo de Terapia</label>
                            <select class="form-select" value={formData.terapia} onChange={handleChange} name="terapia" required="">
                                <option selected disabled value="">. . .</option>
                                <option value="Individual">Individual</option>
                                <option value="Pareja">En Pareja</option>
                                <option value="Grupal">Grupal</option>
                                <option value="Familiar">Familiar</option>
                            </select>
                        </div>


                        <div class="col-md-5">
                            <label for="country" class="form-label text-white">Modo de Terapia</label>
                            <select class="form-select" value={formData.modo} onChange={handleChange} name="modo" required="">
                                <option selected disabled value="">. . .</option>
                                <option value="Virtual">Virtual</option>
                                <option value="Presencial">Presencial</option>
                            </select>
                        </div>

                        <hr class="my-4"></hr>


                        {sending ? <p className='text-white'>Enviando...</p> : null}
                        {msg ? <p className='text-white'>{msg}</p> : null}

                        <div class="col-md-10 text-center">
                            <button class="w-100 btn btn-primary btn-lg ps-4" type="submit">Enviar Formulario</button>
                        </div>
                    </div>

                </form>



            </div >


        </div >



    )
}

export default Contacto;