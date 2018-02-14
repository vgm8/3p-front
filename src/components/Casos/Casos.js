import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Casos.styl';
import image from './assignment-turned-in.png';


const casos = [
  {
    status: 'enviado',
    title: 'Caso de prueba 1',
    isLegal: true,
    dateLegal: '18/Marzo/2018',
    dateBusiness: '20/Marzo/2018',
    auditoria: true,
    business: true
  },
  {
    status: 'borrador',
    title: 'Caso de prueba 2',
    isLegal: false,
    dateLegal: '18/Marzo/2018',
    dateBusiness: '20/Marzo/2018',
    auditoria: false,
    business: true
  },
  {
    status: 'cerrado',
    title: 'Caso de prueba 3',
    isLegal: false,
    dateLegal: '18/Marzo/2018',
    dateBusiness: '20/Marzo/2018',
    auditoria: false,
    business: false,
  },
  {
    status: 'enviado',
    title: 'Caso de prueba 4',
    isLegal: false,
    dateLegal: '18/Marzo/2018',
    dateBusiness: '20/Marzo/2018',
    auditoria: true,
    business: true,
  },

];

const CasesList = ({ match, status }) => {
  console.log(match);
  const casosList = casos.map((caso) => {
    let item = '';
    if (match.params.status === 'todos' || caso.status === match.params.status) {
      item = (
        <div key={caso.title} className={`${caso.status} tresp-caso`}>
          <div className={`tresp-caso`}  style={{flex: 1}}>
            <div className="status enviado"></div>
            <div className="display-flex column">
              <span className="title">{caso.title}</span>
              <span className="statusTitle">{caso.status}</span>
            </div>
            <div className="display-flex start-y legal column">
              <div className="display-flex center-y">
                { caso.isLegal
                  ? <i className="fa fa-check-square-o" aria-hidden="true"></i>
                  : <i className="fa fa-square-o" aria-hidden="true"></i>
              }
              <span>Legal</span>
            </div>
            { caso.isLegal
              ? <span style={{fontSize: '11px'}}>{caso.dateLegal}</span>
              : ''
            }
          </div>
          <div className="display-flex start-y negocio column">
            <div className="display-flex center-y">
              { caso.business
                ? <i className="fa fa-check-square-o" aria-hidden="true"></i>
                : <i className="fa fa-square-o" aria-hidden="true"></i>
            }
            <span>Desarrollo de negocio</span>
          </div>
          { caso.business
            ? <span style={{fontSize: '11px'}}>{caso.dateBusiness}</span>
            : ''
          }
        </div>
        <div>
        </div>
        <div style={{width: '170px'}} className="display-flex end-x">
          { caso.auditoria
            ? (<div className="display-flex column center-y">
                <img style={{maxWidth: '30px', maxHeight: '30px'}} src={image} alt="auditoria"></img>
                <span style={{fontSize: '11px'}} >Auditoría</span>
              </div>)
            : ''
          }
        </div>
        <div style={{flex: 1}} className="display-flex end-x">
          <div className="display-flex column">
            <i  className="fa fa-pencil edit" aria-hidden="true"></i>
            <span style={{fontSize: '11px', color: '#999'}} >Edit</span>
          </div>
        </div>
      </div>
    </div>
  )
    }
    return item;
  });

  return(
    <div className="casos-containers">
      <div>
        <div className="tesp-casos-list">
          {casosList}
        </div>
      </div>
    </div>
  )
}

const Casos = ({ match }) => {
  return (
    <div className="tresp-casos m-b-2">
      <h2 className="m-y-1">Casos</h2>
      <input className="m-b-2 buscar" type="text" placeholder="Buscar..."/>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to={`${match.url}/todos`} activeClassName="active">
            <div className="display-flex column center-x center-y">
              <i className="fa fa-th-list" aria-hidden="true"></i>
              TODOS
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to={`${match.url}/borrador`}  activeClassName="active">
            <div className="display-flex column center-x center-y">
              <i className="fa fa-pencil" aria-hidden="true"></i>
              BORRADOR
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`${match.url}/enviado`} activeClassName="active">
            <div className="display-flex column center-x center-y">
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
              ENVIADOS
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to={`${match.url}/cerrado`} activeClassName="active">
            <div className="display-flex column center-x center-y">
              <i className="fa fa-files-o" aria-hidden="true"></i>
              CERRADOS
            </div>
          </NavLink>
        </li>
      </ul>
      <Route path="/casos/:status" component={CasesList}/>
    </div>
  )
}

export { Casos };