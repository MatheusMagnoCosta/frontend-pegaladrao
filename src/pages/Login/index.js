import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormLogin from '../../components/FormLogin';
import { withRouter } from "react-router-dom";

class Login extends Component {
  render() {
    return (
    <div>
    <Header/>
    <FormLogin/>
    </div>);
}
}
export default withRouter(Login);