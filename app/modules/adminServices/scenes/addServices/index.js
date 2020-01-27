import React, { Component } from "react";
import AddServices from './addServices'

export default class extends Component {
    render() {
        return (
            <AddServices navigation={this.props.navigation} />
        )
    }
}