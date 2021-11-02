import React, { Component } from 'react'
import Form from "./composants/Form"

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }
  }

  addTask() {

  }

  render() {
    return (
      <div className="container">
        <h1>To Do List v2 </h1>
        <div className="row">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;