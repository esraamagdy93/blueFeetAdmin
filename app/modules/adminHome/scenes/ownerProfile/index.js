import React, { Component } from "react";
import OwnerProfile from './ownerProfile'

export default class extends Component {
    render() {
        return (
            <OwnerProfile navigation={this.props.navigation} />
        )
    }
}