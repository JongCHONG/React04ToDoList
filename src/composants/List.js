import React, { Component } from 'react'

class List extends Component {
    render() {
        const { description, status } = this.props.task
        const { index } = this.props
         console.log(this.props)
        return (
            <>
            <div className="col-lg-7 col-sm-4 mx-1">
                {description}
            </div>
            <div className="col-lg-1 col-sm-2">
                {status}
            </div>
            <div className="col-lg-3 col-sm-5">
                <button className="btn btn-primary" onClick={() => this.props.deleteTask(index)}>Supprimer</button>
                <button className="btn btn-primary mx-1" onClick={() => this.props.modifyTask(index)}>Modifier</button>
            </div>
            </>
        )
    }
}

export default List