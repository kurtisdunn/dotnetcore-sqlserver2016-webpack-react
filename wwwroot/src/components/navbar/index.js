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
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="post.html">Sample Post</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
  }
}
