import React from 'react';
import Header from '../../components/Header'
import FormVerOcorrencia from '../../components/FormVerOcorrencia';
import api from '../../services/api';

export class VerOcorrencia extends React.Component {
  constructor(props) {
    super(props);
    // sla cara
    this.state = {
      ocorrencias: []
    }
    this.getOcorrencias = this.getOcorrencias.bind(this);
  }
  componentDidMount() {
    this.getOcorrencias();
  }
  getOcorrencias = async function () {
    const resp = await api.get('/ocorrencias');
    console.log(resp);
  }
  render() {
    return (
      <div>
        <Header />
        <FormVerOcorrencia />
      </div>

    )
  }
};