import React, { Component } from "react";
import BookingDetails from './bookingDetails'

export default class extends Component {
    render() {
        return (
            <BookingDetails navigation={this.props.navigation} />
        )
    }
}