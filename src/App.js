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
    this.modifyTask = this.modifyTask.bind(this)
  }

  addTask(str) {
    this.setState({tasks: [{description: str, status: "To do", modifyStatus: false}, ...this.state.tasks] })
  }
  deleteTask(index) {
    const array = [...this.state.tasks]
    array.splice(index, 1)
    this.setState({tasks: array})
  }
  modifyTask(index) {
    // console.log(index)
    const array = [...this.state.tasks]
    array[index].modifyStatus = true
    // console.log(array[index].modifyStatus)
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
            console.log(element.modifyStatus);
            if (element.modifyStatus) {
              return <Form />
            } else {
              return <List task={element} key={index} deleteTask={this.deleteTask} modifyTask={this.modifyTask} index={index} />
            }
          })}
        </div>
      </div>
    );
  }
}

export default App;