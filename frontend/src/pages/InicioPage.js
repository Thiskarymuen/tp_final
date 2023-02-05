import React from "react";
import { Link } from 'react-router-dom';

const InicioPage = (props) => {
    return (

      <main className="container-sm pt-2">
        <div className="p-4 p-md-5 mb-4 mt-1 rounded text-bg-dark">
          <div className="col-md- px-0">
            <h1 className="display-4 fst-italic">Psicología Caballito</h1>
            <p className="lead my-3">Centro de Salud Mental</p>
            <p className="lead my-3">Atención psicológica</p>
            <p className="lead mb-0 text-end">¿Te interesa? <Link to="/ContactoPage" className="text-white fw-bold">Saber Más</Link></p>
          </div>
        </div>
        


        <div className="container-sm row g-0">
          <div class="col-sm-6 col-md-9">
            <div className="col-md-11">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static text-start">
                  <strong className="d-inline-block mb-2 text-primary">Freudiana / Lacaniana</strong>
                  <h3 className="mb-0">Terapia Individual</h3>
                  <div className="mb-1 text-muted">6 de mayo de 1856</div>
                  <p className="card-text mb-auto">Fobias, ataques de pánico, depresión, la baja autoestima, la toma de decisiones, el autocontrol de las emociones, entre otros</p>
                  <Link to="/ContactoPage">Pedir Presupuesto</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img className="bd-placeholder-img" width="256" height="256" src="https://cdn-icons-png.flaticon.com/256/7169/7169647.png" preserveAspectRatio="xMidYMid slice" focusable="false" alt='terapiaindividual'></img>
                </div>
              </div>
            </div>
            <div className="col-md-11">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static text-start">
                  <strong className="d-inline-block mb-2 text-success">Cognitiva Conductual</strong>
                  <h3 className="mb-0">Terapia de Pareja</h3>
                  <div className="mb-1 text-muted">13 de abril de 1901</div>
                  <p className="mb-auto">Problemas de comunicación, Vinculares, Acuerdos de Convivencia</p>
                  <Link to="/ContactoPage">Pedir Presupuesto</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img className="bd-placeholder-img" width="350" height="256" src="https://d2lcsjo4hzzyvz.cloudfront.net/blog/wp-content/uploads/2021/01/07161738/10-indicadores-que-debes-asistir-a-terapia-de-pareja-.jpg" preserveAspectRatio="xMidYMid slice" focusable="false" alt='terapiaenpareja'></img>
                </div>
              </div>
            </div>

            <div className="col-md-11">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static text-start">
                  <strong className="d-inline-block mb-2 text-danger">Sistémica</strong>
                  <h3 className="mb-0">Terapia de Familia</h3>
                  <div className="mb-1 text-muted">26 de julio de 1875</div>
                  <p className="mb-auto">Relaciones interfamiliares, roles, distribución de las responsabilidades</p>
                  <Link to="/ContactoPage">Pedir Presupuesto</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img className="bd-placeholder-img" width="350" height="256" src="https://pastorgarcia.com/wp-content/uploads/2020/12/terapiafamiliar-pastorgarcia-1.png" preserveAspectRatio="xMidYMid slice" focusable="false" alt='terapiaenfamilia'></img>
                </div>
              </div>
            </div>

            <div className="col-md-11">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static text-start">
                  <strong className="d-inline-block mb-2 text-warning">Cognitiva Conductual / Sistémica</strong>
                  <h3 className="mb-0">Terapia Grupal</h3>
                  <div className="mb-1 text-muted">15 de junio de 1902</div>
                  <p className="mb-auto">Adicciones, Trastornos de la Alimentación, Sociabilización</p>
                  <Link to="/ContactoPage">Pedir Presupuesto</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img className="bd-placeholder-img" width="350" height="256" src="https://thumbs.dreamstime.com/b/terapia-de-grupo-sesiones-psicoterapeuta-reuni%C3%B3n-psic%C3%B3logos-o-ayuda-psicol%C3%B3gica-grupal-hombres-y-mujeres-en-ilustraci%C3%B3n-201280791.jpg" preserveAspectRatio="xMidYMid slice" focusable="false" alt='terapiagrupal'></img>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div className="col-12">
              <div className="position-sticky">
                <div className="p-4">
                  <h4 className="fst-italic text-center">Información</h4>
                  <a href="https://es.wikipedia.org/wiki/Sigmund_Freud"><img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/1200px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg" alt="freud" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/></a>
                </div>

                <div className="p-4">
                  <h4 className="fst-italic">Contactos del Creador</h4>
                  <ol className="list-unstyled">
                    <li><a href="localhost:3000/#">GitHub</a></li>
                    <li><a href="localhost:3000/#">Twitter</a></li>
                    <li><a href="localhost:3000/#">Facebook</a></li>
                  </ol>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>


    );
}

export default InicioPage;