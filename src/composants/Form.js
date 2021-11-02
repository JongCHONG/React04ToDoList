import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
    
        this.state = {
          task: ""
        }

        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTaskDescriptionChange(e) {
        this.setState({task: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.addTask(this.state.task)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="col-10 mx-1" type="texte" onChange={this.handleTaskDescriptionChange}/>
                    <button className="col-1 btn btn-primary" type="submit">
                        submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;