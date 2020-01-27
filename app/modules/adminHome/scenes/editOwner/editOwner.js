import React from 'react'
import { Container, Content, List, ListItem, Text, Input, View } from 'native-base';
import { TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import styles, { deviceHight, appColor, deviceWidth } from '../../../../styles/styles';
import { editOwnerData } from "../../actions";
import { connect } from 'react-redux'
var value
 class editOwner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            first: '',
            last: '',
            fees: '',
            phone: '',
            _id:'',
            data: null,
            finishLoading: false


        };
    }

    componentDidMount() {
        try {
            AsyncStorage.getItem("EditOwner")
                .then(async value => {
                    await this.setState({
                        data:JSON.parse(value),
                        _id:JSON.parse(value)._id,
                        first: JSON.parse(value).name.first,
                        last: JSON.parse(value).name.last,
                        username: JSON.parse(value).username,
                        phone: JSON.parse(value).phone,
                        fees: JSON.parse(value).fees,

                        finishLoading: true,

                    })


                })
        } catch (err) {
            alert(err);
        }


    }
    handleEditOwner = () => {
        this.props.editOwnerData(
            {
                username: this.state.username,
                password: this.state.password,
                first: this.state.first,
                last: this.state.last,
                fees: this.state.fees,
                phone: this.state.phone,
                _id:this.state._id


            }

        );

    }
    render() {
        var Indicator = null;
        var rendercontent = null;
        var renderTab = null
        if (this.state.finishLoading) {
            rendercontent = (
                console.log("this.dfdgdfgdfgdfgsf.data.cofdsgfdgfdurts", this.state.data),


                <Content>
                    <View style={[styles.container, { marginTop: deviceHight * 0.05 }]}>
                        <TextInput
                            placeholder="Court Owner Frist Name "
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={first => {
                                this.setState({ first })
                            }}
                            value={ this.state.first}
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
                            value={JSON.stringify( this.state.fees)}
                        />
                        <TouchableOpacity onPress={this.handleEditOwner}
                        >
                            <View style={{
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

                            </View>
                        </TouchableOpacity>
                    </View>

                </Content>);
        } else {
            Indicator = (
                <View
                    style={styles.viewIndicator}
                >
                    <ActivityIndicator
                        color={appColor}
                        size="large"
                        style={styles.viewheight}
                    />
                </View>
            );
        }

        return (
            <Container>
                {rendercontent}
                {Indicator}

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
      editOwnerData
    }
  )(editOwner)