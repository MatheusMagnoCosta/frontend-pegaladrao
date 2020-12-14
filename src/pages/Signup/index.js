import React, { Component } from 'react';
import Header from '../../components/Header';
import FormSignup from '../../components/FormSignup';
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
  <div>
    <Header />
    <FormSignup/>
    
  </div>)
  }
};
export default withRouter(SignUp);