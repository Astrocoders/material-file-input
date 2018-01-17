'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FileInput from '../src/index.js'

class App extends Component {
  render() {
    return (
      <div>
        <FileInput
          label="Quer anexar algum arquivo relativo a esse Rendimento?"
          helperText="Se você deseja poderá salvar aqui o documento que comprove sua renda, mantendo suas informações em um local único e seguro"
          onChange={file => console.log(file)}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('content'))
