import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.styl';

export class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white tesp-header">
          <a className="navbar-brand" href="#">
            <img alt="user" style={{height: '50px', marginRight: '20px'}} src="http://scaffold.eu-vri.eu/images/13/SCAFFOLD/acciona_logo.png"></img>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/*<li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/address">About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
              </li>
              */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/casos" replace activeClassName="active">Casos1</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create-case" replace activeClassName="active">Crear caso</NavLink>
              </li>
            </ul>
            <div style={{flex: 1}} className="display-flex end-x">
              <i style={{fontSize: '30px'}} className="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
          </div>
        </nav>
    )
  }
}