import './index.scss';
import React from 'react';
import { config } from '../../config';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className={'navbar navbar-expand-lg navbar-dark'} id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="index.html">{ config.siteTitle }</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" activeclassname="active">
                  <NavLink className="nav-link" exact={ true } to="/" >HOME</NavLink>
                </li>
                <li className="nav-item" activeclassname="active">
                  <NavLink className="nav-link" exact={ true } to="/login" >LOGIN</NavLink>
                </li>
                <li className="nav-item" activeclassname="active">
                  <NavLink className="nav-link" exact={ true } to="/sample" >SAMPLE POST</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
  }
}