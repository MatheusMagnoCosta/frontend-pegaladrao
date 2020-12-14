import React from 'react';
import './style.css';
import Header from '../../components/Header';
import FormRegOcorrencia from '../../components/FormRegOcorrencia';
import icon from '../../assets/imagens/icon.png'
import seta from '../../assets/imagens/seta.png';

export const RegistrarOcorrencia = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="">
            <img src={icon} href="./" id="logo" width="100" height="100" alt="" />
          </div>
        </div>
        <div className="">
          <h4 className="">
            Forneça informações do local e o <br />
            tipo da ocorrência para registrarmos <br />
            para você
          </h4>
        </div>
        <div className="">
          <a href="./">
            <img src={seta} id="logo" width="80" height="80" alt="" />
          </a>
          <h6 className="">
            Voltar para a página inicial
          </h6>
        </div>

        <div className="col">
          <FormRegOcorrencia />
        </div>
      </div>
    </div>
  </div>
);