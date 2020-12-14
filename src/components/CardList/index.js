import React, { Component } from 'react';
import './style.css';
import api from '../../services/api';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ocorrencias: [],
      length: 0
    };
    this.getOcorrencias = this.getOcorrencias.bind(this);
  }
  getOcorrencias = async function () {
    const resp = await api.get('/ocorrencias');
    console.log(resp);
    const lista = resp.data
    if(lista.length>this.state.ocorrencias.length){
      const tam = lista.length
      this.setState(
        {
          ocorrencias: lista,
          length: tam
        }
      )
    } else{
      alert("As ocorrências já estão atualizadas");
    }
  }
  render() {
    return (
      <div  id="cardlist">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card">
              <ul className="list-group list-group-flush">
                {this.state.ocorrencias.map(ocorrencia => (
                <li className="list-group-item" key={ocorrencia.id}>{ocorrencia.tipoOcorrencia} | DATA: {ocorrencia.hora} | HORA: {ocorrencia.hora}</li>
                  ))}
              </ul>
              <button onClick={this.getOcorrencias}>Atualizar</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
