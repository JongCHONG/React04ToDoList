import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Form from "./composants/Form"
import List from "./composants/List"


class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  addTask(str) {
    this.setState({tasks: [{description: str, status: "To do"}, ...this.state.tasks] })
  }
  deleteTask(index) {
    console.log(index);
    const array = [...this.state.tasks]
    array.splice(index, 1)
    this.setState({tasks: array})
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div className="container">
        <h1>To Do List v2 </h1>
        <div className="row">
          <Form addTask={this.addTask}/>
        </div>
        <div className="row">
          <h2>List</h2>
          {this.state.tasks.map((element, index) => {
              return  <List task={element} key={index} deleteTask={this.deleteTask} index={index} />
          })}
        </div>
      </div>
    );
  }
}

export default App;