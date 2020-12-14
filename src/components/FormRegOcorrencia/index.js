import React, { Component } from 'react'

import icon from '../../assets/imagens/icon.png'
import seta from '../../assets/imagens/seta.png';

export default class index extends Component {
  render() {
    return (
      <div>
        <form>
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
    )
  }
}
