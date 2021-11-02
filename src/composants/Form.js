import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <input className="col-10 mx-1" type="texte"/>
                    <button className="col-1 btn btn-primary" type="submit">
                        submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;