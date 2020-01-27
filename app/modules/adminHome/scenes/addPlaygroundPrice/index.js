import React, { Component } from "react";
import AddPlaygroundPrice from './addPlaygroundPrice'

export default class extends Component {
    render() {
        return (
            <AddPlaygroundPrice navigation={this.props.navigation} />
        )
    }
}