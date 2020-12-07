import React from 'react';
import './style.css';
import Header from '../../components/Header';
import { Link } from "react-router-dom";
import icon from '../../assets/imagens/icon.png'
import seta from '../../assets/imagens/seta.png';

export const RegistrarOcorrencia = () => (
  <div>

    <Header />
    <div className="container">
      <div className="row h-100">
        <div className="col-5 colunaE">
          <div className="row">
            <div className="col-9"></div>
            <div className="col-3">
              <img src={icon} href="./" id="logo" width="100" height="100" />
            </div>
          </div>
          <div className="col-5 fixed-bottom">
            <div className="row boxDeTexto">
              <h4 className="ml-5">
                Forneça informações do local e o <br />
            tipo da ocorrência para registrarmos <br />
            para você
          </h4>
            </div>
            <div className="row botaoVoltar mb-5">
              <a href="./">
                <img src={seta} id="logo" width="80" height="80" />
              </a>
              <h6 className="ml-5 mt-5">
                Voltar para a página inicial
          </h6>
            </div>
          </div>
        </div>
        <div className="col-7 colunaD">
          <div className="card formularioOcorrencia">
            <div className="card-body">
              <form action="./VerOcorrencia.html">
                <select className="form-control mb-4 formcolor">
                  <option>Ocorrência</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <select className="form-control mb-4 formcolor">
                  <option>Estado</option>
                  <option>Piauí</option>
                </select>
                <select className="form-control mb-4 formcolor">
                  <option>Cidade</option>
                  <option>Teresina</option>
                </select>
                <input type="text" className="form-control mb-4 formcolor" placeholder="Bairro" />
                <input type="text" className="form-control mb-4 formcolor" placeholder="Rua" />
                <button type="submit" className="btn btn-dark btn-block mt-4 btn-ocorrencia">Registrar ocorrência</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);