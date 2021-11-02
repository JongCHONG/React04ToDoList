import React, { Component } from 'react'

class List extends Component {
    render() {
        const { description, status } = this.props.task
        const { index } = this.props
         console.log(this.props)
        return (
            <>
            <div className="col-9 mx-1">
                {description}
            </div>
            <div className="col-1">
                {status}
            </div>
            <div className="col-1">
                <button onClick={() => this.props.deleteTask(index)}>Supprimer</button>
            </div>
            </>
        )
    }
}

export default List