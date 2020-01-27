import React, { Component } from "react"
import Routes from './app/services/routes'
import { ApolloProvider } from "react-apollo"
import { client } from "./app/config/api/index"
import { Provider } from "react-redux"
import store from "./app/redux/store"
import {
  Text
} from "react-native"

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isWalkThrough: true,
      loading: true
    }
  }

  

  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ApolloProvider>
    );
  }
}
