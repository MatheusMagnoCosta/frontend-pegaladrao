import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

export const Home = () => (
  <div>
    <Header />
    <div id="conteudo" class="container">
      <div class="row">
        <div class="col">
          <h1> Bem-Vindo(a)!</h1>
          <br />
          <p>
            <em> Pega Ladrão </em> é um site de denúncia de ocorrências policiais. <br />
        Nós queremos informar para você o quão seguro ou não pode ser um determinado local . <br />
        Aqui você pode ir registrando todas as ocorrências que acontecerem com você, além de <br />
        ter acesso a ocorrência de outras pessoas .
      </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>

);