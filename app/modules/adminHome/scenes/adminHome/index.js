import React, { Component } from "react";
import AdminHome from './adminHome'

export default class extends Component {
    render() {
        return (
            <AdminHome navigation={this.props.navigation} />
        )
    }
}