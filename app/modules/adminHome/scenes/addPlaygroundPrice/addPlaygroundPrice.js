
import React from 'react'
import { TextInput, FlatList, AsyncStorage } from 'react-native';
import styles, { deviceHight, appColor, deviceWidth, gray } from '../../../../styles/styles';
import AntDesign from 'react-native-vector-icons/Entypo';
import { Container, Header, Content, Icon, Picker, Form, Text, View, Button, ListItem, CheckBox, Body, Item, Left, Right } from "native-base";
import { addCourtData } from "../../actions";
import { connect } from 'react-redux'
import { isEnumType } from '../../../../../node_modules/graphql';

class addCourt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: [], selectedLists: [],
            arName: null, enName: null, address: null, lat: 31.376063
            ,
            lag: 36.334775, Times: null, slotsType: null, Photo: null, idOwner: null,
            friends: [
                { id: 0, day: "ALL" },
                { id: 1, day: "SATURDAY" },
                { id: 2, day: "SUNDAY" },
                { id: 3, day: "MONDAY" },
                { id: 4, day: "TUESDAY" },
                { id: 5, day: "WEDNESDAY" },
                { id: 6, day: "THURSDAY" },
                { id: 7, day: "FRIDAY" },


            ],
            phone: null
        };
    }
    componentDidMount() {
        this.handelCourt()

    }
    handelCourt() {

        try {
            AsyncStorage.getItem("arName")
                .then(async value => {
                    await this.setState({ arName: JSON.parse(value) })
                })
        } catch (err) {
            alert(err);
        }
        try {
            AsyncStorage.getItem("enName")
                .then(async value => {
                    await this.setState({ enName: JSON.parse(value) })
                })
        } catch (err) {
            alert(err);
        }
        try {
            AsyncStorage.getItem("address")
                .then(async value => {
                    await this.setState({ address: JSON.parse(value) })
                })
        } catch (err) {
            alert(err);
        }
        try {
            AsyncStorage.getItem("lat")
                .then(async value => {
                    await this.setState({ lat: JSON.parse(value) })
                })
        } catch (err) {
            alert(err);
        }
        try {
            AsyncStorage.getItem("lag")
                .then(async value => {
                    await this.setState({ lag: JSON.parse(value) })
                })
        } catch (err) {
            alert(err);
        }
        try {
            AsyncStorage.getItem("Times")
                .then(async value => {
                    console.log(JSON.parse(value))
                    await this.setState({ Times: JSON.parse(value) })
                })
        } catch (err) {
            alert(err);
        }
        try {
            AsyncStorage.getItem("slotsType")
                .then(async value => {
                    await this.setState({ slotsType: JSON.parse(value) })
                })
        } catch (err) {
            alert(err);
        }
        try {
            AsyncStorage.getItem("Photo")
                .then(async value => {
                    await this.setState({ Photo: JSON.parse(value) })
                })
        } catch (err) {
            alert(err);
        }
        try {
            AsyncStorage.getItem("idOwner")
                .then(async value => {
                    await this.setState({ idOwner: JSON.parse(value) })
                })
        } catch (err) {
            alert(err);
        }

    }
    handelCourtSend() {
        this.props.addCourtData(
            {
                arName: this.state.arName,
                enName: this.state.enName,
                address: this.state.address,
                lag: this.state.lag,
                lat: this.state.lat,
                Times: this.state.Times,
                slotsType: this.state.slotsType,
                Photo: this.state.Photo,
                price: this.state.selectedLists,
                idOwner: this.state.idOwner




            }

        );
        console.log("addCourt", this.state.arName, this.state.enName, this.state.address, this.state.lag, this.state.lat, this.state.Times, this.state.slotsType,
            this.state.Photo, this.state.selectedLists, this.state.idOwner)

    }
    isIconCheckedOrNot = (item, index) => {

        if (this.state.phone !== null) {
            this.state.isChecked[index] = !this.state.isChecked[index];
            this.setState({ isChecked: this.state.isChecked });
            if (this.state.isChecked[index] == true) {

                const obj = { 'day': item.day, 'price': this.state.phone };

                this.state.selectedLists.push(obj)
                this.setState({ selectedLists: this.state.selectedLists, phone: null })
                console.log(this.state.selectedLists)
                // AsyncStorage.setItem("Price", JSON.stringify(this.state.selectedLists))


            } else {
                const obj = { 'from': item.valueFrom, 'to': item.valueTo };
                this.state.selectedLists.pop(obj)
                console.log(this.state.selectedLists)
                // AsyncStorage.setItem("Price", JSON.stringify(this.state.selectedLists))
            }

        } else {
            alert("Please Enter Price")
        }



    }

    CourtSuccess() {
        this.props.navigation.navigate("OwnerProfile")
    }
    render() {

        if (this.props.AdminBookingOwnerReducer.addCourtDataSuccess != null) {
            this.CourtSuccess()
        }

        return (
            <Container>
                <Content >
                    <Text style={[styles.text, { color: gray, marginLeft: deviceWidth * 0.04, marginTop: deviceHight * 0.04 }]}>Price</Text>

                    <View style={[styles.container, { marginTop: deviceHight * 0.01 }]}>




                    </View>

                    <FlatList
                        style={{ marginTop: deviceHight * 0.05 }}
                        data={this.state.friends}
                        // keyExtractor={(item, index) }
                        renderItem={({ item, index }) => (
                            // console.log(item),
                            <View style={{ flexDirection: 'row', }}>
                                <Left style={{ marginLeft: deviceWidth * 0.02 }}>
                                    <View>
                                        <CheckBox
                                            checked={this.state.isChecked[index]}
                                            onPress={() => this.isIconCheckedOrNot(item, index)}
                                        />
                                    </View>
                                </Left>
                                <Body>
                                    <Text >{item.day}</Text>
                                </Body>
                                <Right style={{ marginRight: deviceWidth * 0.1 }}>
                                    <TextInput
                                        placeholder="Price"
                                        autoCapitalize="none"
                                        style={styles.textInputPrice}
                                        onChangeText={phone => {
                                            this.setState({ phone: parseInt(phone) })
                                        }}

                                    />
                                </Right>
                            </View>
                        )

                        }
                    />


                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Button style={{ width: deviceWidth * 0.4, justifyContent: 'center', backgroundColor: appColor, marginTop: deviceHight * 0.01 }}

                            onPress={() => {
                                this.handelCourtSend()
                            }

                            }><Text> Save </Text></Button>
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
        addCourtData
    }
)(addCourt)