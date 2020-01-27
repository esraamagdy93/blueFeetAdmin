
import React from 'react'
import { TextInput, FlatList, AsyncStorage, TouchableOpacity } from 'react-native';
import styles, { deviceHight, appColor, deviceWidth, gray } from '../../../../styles/styles';
import AntDesign from 'react-native-vector-icons/Entypo';
import { Container, Header, Content, Icon, Picker, Form, Text, View, Button, ListItem, CheckBox, Body, Item, Left } from "native-base";

export default class booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: [],
            selected: undefined,
            friends: [{ id: 10, name: "Gundam" },
            { id: 20, name: "Rambo" },
            { id: 30, name: "Mickey Mouse" }],
            selectedFriendId: [],
            arName: null,
            enName: null,
            address: null,
            data: [{ id: 10, name: "Football" },
            { id: 20, name: "Water" },
            { id: 30, name: "Shower" },
            { id: 40, name: "Reflectors" },
            { id: 50, name: "Bathroom" },
            { id: 60, name: "5-a-side" }, { id: 70, name: "Parking lot" }, { id: 80, name: "6-a-side" }],





        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    onCheckBoxPress(id) {
        let tmp = this.state.selectedFriendId;

        if (tmp.includes(id)) {
            tmp.splice(tmp.indexOf(id), 1);
        } else {
            tmp.push(id);
        }

        this.setState({
            selectedFriendId: tmp
        });
    }

    isIconCheckedOrNot = (item, index) => {

        let { isChecked } = this.state;
        isChecked[index] = !isChecked[index];
        this.setState({ isChecked: isChecked });



    }
    render() {
        return (
            <Container>
                <Content >
                    <Text style={[styles.text, { color: gray, marginLeft: deviceWidth * 0.04, marginTop: deviceHight * 0.04 }]}>Type</Text>
                    <Form style={{ marginLeft: deviceWidth * 0.03, marginRight: deviceWidth * 0.03 }}>
                        <Picker
                            mode="dropdown"
                            placeholder="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Select your SIM"
                            textStyle={{ color: "#5cb85c" }}
                            itemStyle={{
                                backgroundColor: "#d3d3d3",
                                marginLeft: 0,
                                paddingLeft: 10
                            }}
                            itemTextStyle={{ color: '#788ad2' }}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                        // onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Football" value="key0" />

                        </Picker>
                    </Form>
                    <View style={[styles.container, { marginTop: deviceHight * 0.01 }]}>

                        <TextInput
                            placeholder="Arabic Name"
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={arName => {
                                this.setState({ arName })
                                AsyncStorage.setItem("arName", JSON.stringify(this.state.arName));

                            }}
                            value={this.state.arName}
                        />

                        <TextInput
                            placeholder="English Name"
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={enName => {
                                this.setState({ enName })
                                AsyncStorage.setItem("enName", JSON.stringify(this.state.enName));

                            }}
                            value={this.state.enName}
                        />


                    </View>
                    <View style={[styles.container, { flexDirection: 'row' }]}>


                        <TextInput
                            placeholder="Adress"
                            autoCapitalize="none"
                            style={styles.textInputlocation}
                            onChangeText={address => {
                                this.setState({ address })
                                AsyncStorage.setItem("address", JSON.stringify(this.state.address));
                                AsyncStorage.setItem("lat", JSON.stringify(31.376063));
                                AsyncStorage.setItem("lag", JSON.stringify(36.334775));


                            }}
                            value={this.state.address}
                        />

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("AddLocation")}>
                            <AntDesign
                                name={'location'}
                                size={28}
                                style={{ color: appColor, marginTop: deviceHight * 0.03, marginLeft: deviceWidth * 0.03 }}
                            />
                        </TouchableOpacity>

                    </View>


                    <FlatList
                        style={{ marginTop: deviceHight * 0.05 }}
                        data={this.state.data
                        }
                        // keyExtractor={(item, index) }
                        numColumns={2}
                        renderItem={({ item, index }) => (
                            // console.log(item),
                            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: deviceHight * 0.025 }}>
                                <CheckBox
                                    checked={this.state.isChecked[index]}
                                    onPress={() => this.isIconCheckedOrNot(item, index)}
                                    style={{ marginLeft: deviceWidth * 0.1 }}
                                />
                                <Text style={{ marginLeft: deviceWidth * 0.1 }}>{item.name}</Text>
                            </View>
                        )

                        }
                    />

                    {/* </Item> */}


                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>



                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("AddPlaygroundPhoto")}>

                            <View style={{ width: deviceWidth * 0.4, height: deviceHight * 0.05, backgroundColor: appColor, alignItems: 'center', marginTop: deviceHight * 0.06, marginRight: deviceWidth * 0.07 }}>
                                <Text style={{ color: '#fff', marginTop: deviceHight * 0.01 }}>Next</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </Content>

            </Container>
        )
    }
}
