import React from 'react';
import { connect } from "react-redux";

import { deleteSmurf } from '../actions';

class Smurf extends React.Component {

    deleteCurrentSmurf = e => {
        e.preventDefault();
        console.log(this.props)
        this.props.deleteSmurf(this.props.id);
    }

    render() {
        return (
            <div>
                {this.props.name}, {this.props.age} years old, {this.props.height}
                <button onClick={this.deleteCurrentSmurf}>X</button>
            </div>
        )
    }
}


export default connect(
    null ,
    { deleteSmurf }
)(Smurf);