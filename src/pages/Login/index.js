import React from 'react';
import Header from '../../components/Footer';
import Footer from '../../components/Header';
import FormLogin from '../../components/FormLogin';
import {  Link } from "react-router-dom";

export const Login = () => (
  <div>
    <Header />
    <div class="card" id="formulario">
    <div class="card-body">
      <h1 class="card-title text-center">Login</h1>
      <FormLogin />
      <h5 class="text-center mt-4">Não tem uma conta?</h5>
      <p class="text-center">
        <strong>
          <Link to="./signup">Cadastre-se</Link>
        </strong>
      </p>
    </div>
  </div>


    <Footer />
  </div>
);