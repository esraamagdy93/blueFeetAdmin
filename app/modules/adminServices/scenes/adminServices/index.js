import React, { Component } from "react";
import AdminServices from './adminServices'

export default class extends Component {
    render() {
        return (
            <AdminServices navigation={this.props.navigation} />
        )
    }
}