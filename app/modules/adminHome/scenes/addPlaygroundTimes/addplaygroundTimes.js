
import React from 'react'
import { TextInput, FlatList, AsyncStorage } from 'react-native';
import styles, { deviceHight, appColor, deviceWidth, gray } from '../../../../styles/styles';
import AntDesign from 'react-native-vector-icons/Entypo';
import { Container, Header, Content, Icon, Picker, Form, Text, View, Button, ListItem, CheckBox, Body, Item, Left } from "native-base";

export default class booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: [], selectedLists: [],
            friends: [
                { timeText: "12pm - 1pm   ", valueFrom: "_12_PM", valueTo: "_01_PM" },
                { timeText: "1pm - 2pm     ", valueFrom: "_01_PM", valueTo: "_02_PM" },
                { timeText: "2pm - 3pm     ", valueFrom: "_02_PM", valueTo: "_03_PM" },
                { timeText: "3pm - 4pm     ", valueFrom: "_03_PM", valueTo: "_04_PM" },
                { timeText: "4pm - 5pm     ", valueFrom: "_04_PM", valueTo: "_05_PM" },
                { timeText: "5pm - 6pm    ", valueFrom: "_05_PM", valueTo: "_06_PM" },
                { timeText: "6pm - 7pm     ", valueFrom: "_06_PM", valueTo: "_07_PM" },
                { timeText: "7pm - 8pm  ", valueFrom: "_07_PM", valueTo: "_08_PM" },
                { timeText: "8pm - 9pm      ", valueFrom: "_08_PM", valueTo: "_09_PM" },
                { timeText: "9pm - 10pm  ", valueFrom: "_09_PM", valueTo: "_10_PM" },
                { timeText: "10pm - 11pm ", valueFrom: "_10_PM", valueTo: "_11_PM" },
                { timeText: "11pm - 12am", valueFrom: "_11_PM", valueTo: "_12_AM" },
                { timeText: "12am - 1am   ", valueFrom: "_12_AM", valueTo: "_01_AM" },
                { timeText: "1am - 2am    ", valueFrom: "_01_PM", valueTo: "_02_AM" },
                { timeText: "2am - 3am    ", valueFrom: "_02_PM", valueTo: "_03_AM" },
                { timeText: "3am - 4am    ", valueFrom: "_03_PM", valueTo: "_04_AM" },
                { timeText: "4am - 5am    ", valueFrom: "_04_PM", valueTo: "_05_AM" },
                { timeText: "5am - 6am    ", valueFrom: "_05_PM", valueTo: "_06_AM" },
                { timeText: "6am - 7am    ", valueFrom: "_06_PM", valueTo: "_07_AM" },
                { timeText: "7am - 8am", valueFrom: "_07_PM", valueTo: "_08_AM" },
                { timeText: "8am - 9am    ", valueFrom: "_08_PM", valueTo: "_09_AM" },
                { timeText: "9am - 10am", valueFrom: "_09_PM", valueTo: "_10_AM" },
                { timeText: "10am - 11am", valueFrom: "_10_PM", valueTo: "_11_AM" },

            ],
            selectedFriendId: [],
            // data:[{timeText:"4pm - 5pm",valueFrom:"_04_PM",valueTo:"_05_PM"},{}]
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    isIconCheckedOrNot = (item, index) => {

        let { isChecked, selectedLists } = this.state;
        isChecked[index] = !isChecked[index];
        this.setState({ isChecked: isChecked });

        if (isChecked[index] == true) {
            const obj = { 'from': item.valueFrom, 'to': item.valueTo };

            selectedLists.push(obj)
            this.setState({ selectedLists: selectedLists })
            console.log(this.state.selectedLists)


        } else {
            const obj = { 'from': item.valueFrom, 'to': item.valueTo };
            selectedLists.pop(obj)
            console.log(this.state.selectedLists)

        }

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
                            <Picker.Item label="one Hour" value="key0" />
                            <Picker.Item label="Two Hour" value="key1" />

                        </Picker>
                    </Form>
                    <FlatList
                        style={{ marginTop: deviceHight * 0.05 }}
                        data={this.state.friends}
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
                                <Text style={{ marginLeft: deviceWidth * 0.1 }}>{item.timeText}</Text>
                            </View>
                        )

                        }
                    />
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Button onPress={() => {
                            this.props.navigation.navigate("AddPlaygroundPrice"),
                                AsyncStorage.setItem("Times", JSON.stringify(this.state.selectedLists));
                            AsyncStorage.setItem("slotsType", JSON.stringify("ONE_HOUR"));
                        }}
                            style={{ width: deviceWidth * 0.4, justifyContent: 'center', backgroundColor: appColor, marginTop: deviceHight * 0.01 }}><Text> Next </Text></Button>
                    </View>

                </Content>

            </Container>
        )
    }
}
