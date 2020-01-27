import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import styles, { appColor, deviceHight, deviceWidth } from '../../../.././styles/styles'
import { loginData } from "../../actions";
import { connect } from 'react-redux'

class adminLogin extends React.Component {
  state = { username: '', password: '', errorMessage: null }
  handleadminLogin = () => {
    this.props.loginData(
      {
        username: this.state.username,
        password: this.state.password,
      }

    );

  }
  loginSuccess() {
    this.props.navigation.navigate('AppStack')

  }
  render() {
    if (this.props.authReducer.loginDataSuccess != null) {
      this.loginSuccess()
    }
    return (
      <View style={styles.container}>
        {/* <Text style={{color:appColor, fontSize: 120}}>Log In</Text> */}
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="User Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={username => {
            this.setState({ username })
          }}
          value={this.state.username}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => {
            this.setState({ password })
          }}
          value={this.state.password}
        />

        <TouchableOpacity
          onPress={this.handleadminLogin}>

          <View style={{ width: deviceWidth * 0.4, height: deviceHight * 0.07, backgroundColor: appColor, alignItems: 'center', marginTop: deviceHight * 0.06 }}>
            <Text style={{ color: '#fff', marginTop: deviceHight * 0.02 }}>Log In</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    authReducer: state.authReducer,
  };
}
export default connect(
  mapStateToProps,
  {
    loginData
  }
)(adminLogin)

