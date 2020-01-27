import React, { Component } from "react";
import AddplaygroundTimes from './addplaygroundTimes'

export default class extends Component {
    render() {
        return (
            <AddplaygroundTimes navigation={this.props.navigation} />
        )
    }
}