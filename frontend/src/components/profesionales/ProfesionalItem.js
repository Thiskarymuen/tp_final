import React from 'react';
import { Link } from 'react-router-dom';

const ProfesionalItem = (props) => {
    const { nombre, apellido, titulo, universidad, matricula, imagen, body } = props;

    return (


                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={imagen} alt={nombre} />
                                <div class="card-body">
                                    <h3 className='text-dark'>{nombre} {apellido}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: body }} />
                                    <hr />
                                    <h4>{titulo}</h4>
                                    <h5 className='text-secondary'>{universidad}</h5>
                                    <h6 className='text-secondary'>{matricula}</h6>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group ms-auto">
                                        <Link to="/ContactoPage"><button type="button" class="btn btn-sm btn-outline-primary">Contactar</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


    )
}

export default ProfesionalItem;