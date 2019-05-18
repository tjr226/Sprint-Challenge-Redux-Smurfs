import React from "react";
import { connect } from "react-redux";
import { createSmurf } from '../actions';

class AddSmurf extends React.Component {
    state = {
        newSmurf: {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        })
    }

    createNewSmurf = e => {
        e.preventDefault();
        this.props.createSmurf(this.state.newSmurf)
        this.setState({
            newSmurf: {
                name: '',
                age: '',
                height: '',
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.createNewSmurf}>
                <input
                    type="text"
                    name="name"
                    value={this.state.newSmurf.name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="age"
                    value={this.state.newSmurf.age}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="height"
                    value={this.state.newSmurf.height}
                    onChange={this.handleChange}
                />
                <button>Add Smurf</button>
            </form>
        )
    }
}

export default connect(
    null ,
    { createSmurf }
)(AddSmurf);