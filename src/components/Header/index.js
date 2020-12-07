import React, { Component } from 'react'
import './style.css';
import icon from '../../assets/imagens/icon.png'
import {  Link } from "react-router-dom";

export class index extends Component {
  render() {
    return (
      <header>
        <nav id="menu" className="navbar navbar-expand-lg navbar-dark static-top">
          <div className="container">
              <img src={icon} width="70" height="70" alt="" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="./" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="./registrar-ocorrencia" className="nav-link">Registrar ocorrência</Link>
                </li>
                <li className="nav-item">
                  <Link to="./ver-ocorrencia" className="nav-link">Ver ocorrências de um local</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default index
