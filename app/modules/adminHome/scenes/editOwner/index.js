import React, { Component } from "react";
import EditOwner from './editOwner'

export default class extends Component {
    render() {
        return (
            <EditOwner navigation={this.props.navigation} />
        )
    }
}