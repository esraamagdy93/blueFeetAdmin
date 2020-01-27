import React from 'react'
import { FlatList, ActivityIndicator, AsyncStorage } from 'react-native'
import styles, { babyBlue, appColor, deviceHight, deviceWidth, gray } from '../../../.././styles/styles'
import { Container, Header, Button, Icon, Fab, Content, List, ListItem, Text, Tab, Tabs, View, Left, Body, Right } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

//     '2012-05-17',
//     '2012-05-18',
//     '2012-05-19',

// ];
// let newDaysObject = {};

export default class signUp extends React.Component {

    state = { email: '', password: '', errorMessage: null, data: null, finishLoading: false }

    componentDidMount() {


    }
    render() {
        var Indicator = null;
        var rendercontent = null;
        if (!this.state.finishLoading) {
            rendercontent = (
                <Content >
                    <View style={{ height: deviceHight * 0.01, width: deviceWidth, backgroundColor: '#f7f7f7' }}></View>

                    <View style={{ marginTop: deviceHight * 0.03, marginLeft: deviceHight * 0.03 }}>
                        <Text style={[styles.text, { color: 'gray' }]}>Court Owner Name </Text>
                        <Text style={[styles.text]}>ddsfsdfd  </Text>

                    </View>
                    <View style={{ marginLeft: deviceHight * 0.03 }}>
                        <Text style={[styles.text, { color: 'gray' }]}>User Name </Text>
                        <Text style={[styles.text]}>sdfsdfsf</Text>

                    </View>
                    <View style={{ marginLeft: deviceHight * 0.03 }}>
                        <Text style={[styles.text, { color: 'gray' }]}>Mobile No. </Text>
                        <Text style={[styles.text, { color: '#00f2ff' }]}>dsfdsfsdg </Text>

                    </View>
                    <View style={{ marginLeft: deviceHight * 0.03 }}>
                        <Text style={[styles.text, { color: 'gray' }]}>Mobile No. </Text>
                        <Text style={[styles.text, { color: '#00f2ff' }]}>dsfdsfsdg </Text>

                    </View>
                    <View style={{ marginLeft: deviceHight * 0.03 }}>
                        <Text style={[styles.text, { color: 'gray' }]}>Mobile No. </Text>
                        <Text style={[styles.text]}>sdfsdfsf</Text>

                    </View>
                    <View style={{ marginLeft: deviceHight * 0.03 }}>
                        <Text style={[styles.text, { color: 'gray' }]}>Mobile No. </Text>
                        <Text style={[styles.text]}>sdfsdfsf</Text>

                    </View>
                    <View style={{ marginLeft: deviceHight * 0.03 }}>
                        <Text style={[styles.text, { color: 'gray' }]}>Mobile No. </Text>
                        <Text style={[styles.text]}>sdfsdfsf</Text>

                    </View>


                    <View style={{  justifyContent: 'center',alignContent:'center',alignItems:'center' }}>
                        <Button style={{ width: deviceWidth * 0.8, justifyContent: 'center', backgroundColor: 'green',marginBottom:deviceHight*0.02 }}><Text> APPROVE </Text></Button>
                        <Button style={{ width: deviceWidth * 0.8, justifyContent: 'center', backgroundColor: 'red' ,marginBottom:deviceHight*0.02}}><Text> Reject </Text></Button>


                    </View>

                </Content>
            );
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

