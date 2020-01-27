import React, { Component } from "react";
import AddPlaygroundPhoto from './addPlaygroundPhoto'

export default class extends Component {
    render() {
        return (
            <AddPlaygroundPhoto navigation={this.props.navigation} />
        )
    }
}