import { useState, useEffect } from 'react';
import axios from 'axios';
import ProfesionalItem from '../components/profesionales/ProfesionalItem';
import React from 'react';

const Profesionales = (props) => {

    const [loading, setLoading] = useState(false);
    const [profesionales, setProfesionales] = useState([]);

    useEffect(() => {
        const cargarProfesionales = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/profesionales');
            setProfesionales(response.data);
            setLoading(false);

        };
        cargarProfesionales();
    }, []);

    return (



        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Estos son nuestros Profesionales</h1>
                    <p class="lead text-dark">Nuestro equipo de terapeutas cuentan con una gran experiencia en el campo de la Psicologia y los distintos tipos de Terapia.</p>
                    <p>
                        <a href="#//" class="btn btn-primary m-2">Main call to action</a>
                        <a href="#//" class="btn btn-secondary m-2">Secondary action</a>
                    </p>
                </div>
            </div>

            <main className='row'>

                <div class="album py-5 bg-light">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


                            {loading ? (
                                <p>Cargando...</p>
                            ) : (
                                profesionales.map(item => <ProfesionalItem key={item.id}
                                    nombre={item.nombre}
                                    apellido={item.apellido}
                                    titulo={item.titulo}
                                    imagen={item.imagen}
                                    universidad={item.universidad}
                                    matricula={item.matricula}
                                    body={item.body}
                                />)
                            )}

                        </div>
                    </div>
                </div>

            </main>

        </section>


    );
}

export default Profesionales;