import React from 'react';
import Header from '../../components/Header'
import icon from '../../assets/imagens/icon.png';
import seta from '../../assets/imagens/seta.png';
import api from '../../services/api';

export class VerOcorrencia extends React.Component{
  constructor(props) {
    super(props);
      // sla cara
    this.state = {
      ocorrencias: []
    }
    this.getOcorrencias = this.getOcorrencias.bind(this);
  }
  componentDidMount(){
    this.getOcorrencias();
  }
  getOcorrencias = async function() {
    const resp = await api.get('/ocorrencias');
    console.log(resp);
  }
  render () {
  return (
  <div>
    <Header />
    <div className="row h-100">
      <div className="col-5 colunaE">
        <div className="row">
          <div className="col-9"></div>
          <div className="col-3">
            <img
              src={icon}
              href="./"
              id="logo"
              width="100"
              height="100"
              alt=""
            />
          </div>
        </div>
        <div className="col-5 fixed-bottom">
          <div className="row boxDeTexto">
            <h4 className="ml-5">
              Forneça informações do local para<br />
              realizarmos uma consulta ao <br />
              nosso banco de dados
            </h4>
          </div>
          <div className="row botaoVoltar mb-5">
            <a href="./">
              <img src={seta}
                id="logo"
                width="80"
                height="80"
                alt=""
              />
            </a>
            <h6 className="ml-5 mt-5">Voltar para a página inicial</h6>
          </div>
        </div>
      </div>
      <div className="col-7 colunaD">
        <div className="card formularioOcorrencia">
          <div className="card-body">
            <form action="./mapa.html">
              <select className="form-control mb-4 formcolor">
                <option>Estado</option>
                <option>Piauí</option>
              </select>
              <select className="form-control mb-4 formcolor">
                <option>Cidade</option>
                <option>Teresina</option>
              </select>
              <input
                type="text"
                className="form-control mb-4 formcolor"
                placeholder="Bairro"
              />
              <button
                type="submit"
                className="btn btn-dark btn-block mt-4 btn-ocorrencia"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

)
}
};