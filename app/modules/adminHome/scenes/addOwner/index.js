import React, { Component } from "react";
import AddOwner from './addOwner'

export default class extends Component {
    render() {
        return (
            <AddOwner navigation={this.props.navigation} />
        )
    }
}