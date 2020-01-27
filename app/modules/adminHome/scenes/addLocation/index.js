import React, { Component } from "react";
import AddLocation from './addLocation'

export default class extends Component {
    render() {
        return (
            <AddLocation navigation={this.props.navigation} />
        )
    }
}