import React from 'react';
import './CreateCases.styl';

export class CreateCases extends React.Component {
  render() {
    return (
      <div>
        <h1 className="m-y-2">Crear Caso</h1>
        <form className="tresp-create-cases">
          {/* Detalles generales info */}
          <div>
            <p className="section-title">Detalles generales</p>
            <div className="form-group">
              <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Nombre caso"/>
            </div>
            <div className="form-group">
              <textarea className="form-control" id="descripcion" rows="3" placeholder="Descripción..."></textarea>
            </div>
            <div className="display-flex">
              <div className="form-group flex m-r-1">
                <label htmlFor="exampleFormControlSelect1">Fecha de nacimiento</label>
                <input type="date" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Nombre caso"/>
              </div>
              <div className="form-group flex m-l-1">
                <label htmlFor="exampleFormControlSelect1">Responsable</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Carla</option>
                  <option>Roberto</option>
                  <option>James</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stakeholders info */}
          <div>
            <p className="section-title m-t-2">Stakeholders</p>
            {/* Legal */}
            <p className="subsection-title">Legal</p>
            <div className="display-flex">
              <div className="form-group flex m-r-1">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Nombre"/>
              </div>
              <div className="form-group flex">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Apellidos"/>
              </div>
              <div className="form-group flex m-l-1">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Email"/>
              </div>
            </div>
            <div className="display-flex">
              <div className="form-group flex m-r-1">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Departamento"/>
              </div>
              <div className="form-group flex">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Cargo"/>
              </div>
              <div className="flex m-l-1 invisible"></div>
            </div>

            {/* Desarrollo de negocio */}
            <p className="subsection-title m-t-1">Desarrollo de negocio</p>
            <div className="display-flex">
              <div className="form-group flex m-r-1">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Nombre"/>
              </div>
              <div className="form-group flex">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Apellidos"/>
              </div>
              <div className="form-group flex m-l-1">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Email"/>
              </div>
            </div>
            <div className="display-flex">
              <div className="form-group flex m-r-1">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Departamento"/>
              </div>
              <div className="form-group flex">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Posición"/>
              </div>
              <div className="flex m-l-1 invisible"></div>
            </div>
          </div>

          {/* Documentos */}
          <div>
            <p className="section-title m-t-2">Documentos</p>
            <div className="display-flex">
              <div className="form-group flex m-r-1">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Nombre del archivo"/>
              </div>
              <div className="form-group flex">
                <input type="email" className="form-control" id="nombreCaso" aria-describedby="nombreCaso" placeholder="Archive en procur-e"/>
              </div>
            </div>
            <div className="form-group">
              <textarea className="form-control" id="descripcion" rows="2" placeholder="Comentarios..."></textarea>
            </div>
          </div>


          {/* Evaluación */}
          <div>
            <p className="section-title m-t-3">Evaluación</p>
            <div className="display-flex">
              <div className="form-group flex m-r-1">
                <label htmlFor="exampleFormControlSelect1">Valoración</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Contratar</option>
                  <option>No Contratar</option>
                  <option>Riesgo de contratación</option>
                  <option>Contactar Asesoría Jurídica</option>
                </select>
              </div>
              <div className="form-group flex">
                <label htmlFor="exampleFormControlSelect1">Valoración en Procur-e</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Rojo</option>
                  <option>Amarillo</option>
                  <option>Verde</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <textarea className="form-control" id="descripcion" rows="3" placeholder="Descripción de la valoración..."></textarea>
            </div>
          </div>

          <div className="display-flex center-x center-y m-t-3 m-b-1">
            <button type="button" class="btn btn-secondary m-r-2">Guardar borrador</button>
            <button type="button" class="btn btn-primary m-r-2">Vista preliminar</button>
            <button type="button" class="btn btn-success m-r-2">Revisar y enviar</button>
          </div>
        </form>
      </div>
    )
  }

}