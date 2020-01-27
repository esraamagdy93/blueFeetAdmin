import React, { Component } from "react";
import AddPlayground from './addPlayground'

export default class extends Component {
    render() {
        return (
            <AddPlayground navigation={this.props.navigation} />
        )
    }
}