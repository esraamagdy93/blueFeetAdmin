import React, { Component } from "react";
import AdminLogin from './adminLogin'

export default class extends Component {
    render() {
        return (
            <AdminLogin navigation={this.props.navigation} />
        )
    }
}