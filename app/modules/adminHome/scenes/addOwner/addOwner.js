import React from 'react'
import { Container, Content, List, ListItem, Text, Input, View } from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native';
import styles, { deviceHight, appColor, deviceWidth } from '../../../../styles/styles';
import { addOwnerData } from "../../actions";
import { connect } from 'react-redux'
var value
class addOwner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      first: '',
      last: '',
      fees: '',
      phone: ''

    };
  }
  componentDidMount(){
    this.props.AdminBookingOwnerReducer.addOwnerDataSuccess=null
  }

  handleAddOwner = () => {
    this.props.addOwnerData(
      {
        username: this.state.username,
        password: this.state.password,
        first: this.state.first,
        last: this.state.last,
        fees: this.state.fees,
        phone: this.state.phone


      }

    );

  }

  componentWillUnmount() {
    this.props.navigation.state.params.onGoBack();
    this.props.navigation.goBack();
    this.props.AdminBookingOwnerReducer.addOwnerDataSuccess=null

  }
  render() {

    if (this.props.AdminBookingOwnerReducer.addOwnerDataSuccess) {
      //  this.props.navigation.state.params.onGoBack();
      this.props.navigation.goBack()
    }
    return (
      <Container>
        <Content >
          <View style={[styles.container, { marginTop: deviceHight * 0.05 }]}>
            <TextInput
              placeholder="Court Owner Frist Name "
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={first => {
                this.setState({ first })
              }}
              value={this.state.first}
            />
            <TextInput
              placeholder="Court Owner Last Name "
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={last => {
                this.setState({ last })
              }}
              value={this.state.last}
            />
            <TextInput
              placeholder="Username"
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
            <TextInput
              placeholder="Mobile No."
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={phone => {
                this.setState({ phone })
              }}
              value={this.state.phone}
            />
            <TextInput
              placeholder="Fees %"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={fees => {
                this.setState({ fees })
              }}
              value={this.state.fees}
            />
            <TouchableOpacity onPress={this.handleAddOwner}
            >
              {/* <View style={{
                width: deviceWidth * 0.8,
                backgroundColor: appColor,
                height: deviceHight * 0.09,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: deviceWidth * 0.1,
                marginTop: deviceHight * 0.06, elevation: 3,
                marginBottom: deviceHight * 0.01,
              }}>
                <Text style={{ fontSize: deviceWidth * 0.06, color: '#ffffff', fontWeight: '200' }}>Add owner</Text>

              </View> */}

<View style={{ width: deviceWidth * 0.4, height: deviceHight * 0.07, backgroundColor: appColor, alignItems: 'center', marginTop: deviceHight * 0.06 }}>
            <Text style={{ color: '#fff', marginTop: deviceHight * 0.02 }}>Add owner</Text>
          </View>
            </TouchableOpacity>
          </View>
        </Content>

      </Container>
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    AdminBookingOwnerReducer: state.AdminBookingOwnerReducer,
  };
}
export default connect(
  mapStateToProps,
  {
    addOwnerData
  }
)(addOwner)



