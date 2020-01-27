import React from 'react'
import { FlatList, ActivityIndicator, AsyncStorage, TouchableOpacity } from 'react-native'
import styles, { babyBlue, appColor, deviceHight, deviceWidth, gray } from '../../../.././styles/styles'
import { Container, Header, Button, Icon, Fab, Content, List, ListItem, Text, Tab, Tabs, View, Left, Body, Right, ScrollableTab } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
import moment from "moment";

export default class signUp extends React.Component {

    state = {
        email: '', password: '', errorMessage: null, data: null, finishLoading: false,

        day: null, dataPrice: null, Day: "ALL"
    }

    covertTodayName(dayFormat) {
        console.log(dayFormat)
        const today = dayFormat;
        const day = moment(today).format("dddd");
        const dayName = day.toUpperCase()
        this.setState({
            day: dayName,
        });
        console.log(this.state.day)

    }
    componentDidMount() {

        const data = this.props.navigation.state.params.item;
        this.setState({
            data: data,
            finishLoading: true
        });

        console.log("data", data)

        const today = [year + '-' + month + '-' + date];
        const day = moment(today.dateString).format("dddd");
        const dayName = day.toUpperCase()

        this.setState({
            day: dayName,
        });
    }
    render() {
        var Indicator = null;
        var rendercontent = null;
        var renderTab = null
        if (this.state.finishLoading) {
            renderTab = (
                console.log("this.state.data.courts", this.state.data.courts),

                <Tabs tabBarUnderlineStyle={{ backgroundColor: babyBlue, height: 2 }}
                    tabContainerStyle={{
                        elevation: 0
                    }}>
                    {this.state.data.courts.length > 0 && this.state.data.courts.map((data, index) =>

                        <Tab key={data._id}
                            tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }}
                            activeTabStyle={{ backgroundColor: '#fff' }}
                            activeTextStyle={{ color: '#000', fontWeight: 'normal' }}
                            textStyle={{ color: '#556c7a', fontWeight: 'normal' }}
                            heading={data.name.en}>

                            {/* {data.price.day=="ALL" ? 
                        
                                :null} */}

                            {data.price.map((dataPrice, index) => {
                                if (dataPrice.day == "ALL") {
                                    return (

                                        <FlatList
                                            data={data.available}

                                            renderItem={({ item }) => (
                                                <ListItem >

                                                    <Text>    {`${item.from}` + ' ' + `${item.to}`}</Text>

                                                </ListItem>
                                            )}
                                        />
                                    )

                                } else {

                                    if (dataPrice.day == this.state.day) {
                                        console.log(dataPrice.day, this.state.day)
                                        return (

                                            <FlatList
                                                data={data.available}

                                                renderItem={({ item }) => (
                                                    <ListItem >

                                                        <Text>    {`${item.from}` + ' ' + `${item.to}`}</Text>

                                                    </ListItem>
                                                )}
                                            />
                                        )
                                    }
                                }


                            }
                            )}




                        </Tab>


                    )}
                </Tabs>
            )

            rendercontent = (
                <Content >
                    <View style={{ height: deviceHight * 0.01, width: deviceWidth, backgroundColor: '#f7f7f7' }}></View>
                    <View style={{ marginTop: deviceHight * 0.03, marginLeft: deviceHight * 0.03 }}>
                        <Text style={[styles.text, { color: 'gray' }]}>Court Owner Name </Text>
                        <Text style={[styles.text]}>{this.state.data.profile.name.first} {this.state.data.profile.name.last}   </Text>

                    </View>
                    <View style={{ marginLeft: deviceHight * 0.03, marginTop: deviceHight * 0.03, }}>
                        <Text style={[styles.text, { color: 'gray' }]}>User Name </Text>
                        <Text style={[styles.text]}>{this.state.data.profile.username}</Text>

                    </View>
                    <View style={{ marginLeft: deviceHight * 0.03, marginTop: deviceHight * 0.03, }}>
                        <Text style={[styles.text, { color: 'gray' }]}>Mobile No. </Text>
                        <Text style={[styles.text, { color: '#00f2ff' }]}>{this.state.data.profile.phone} </Text>

                    </View>
                    <View style={{ height: deviceHight * 0.001, width: deviceWidth, backgroundColor: gray, marginTop: deviceHight * 0.02 }}></View>
                    <Text style={[styles.text, { color: 'gray', marginLeft: deviceWidth * 0.06, marginTop: deviceHight * 0.02 }]}>Playgrounds </Text>

                    <FlatList style={{ height: deviceHight * 0.3 }}
                        data={this.state.data.courts}
                        renderItem={({ item }) => (
                            <ListItem >
                                <View style={{ flexDirection: 'row' }}>


                                    <View style={{ width: deviceWidth * 0.75, justifyContent: 'center' }}>
                                        <View>

                                            <Text>      {`${item.name.en}`}</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: deviceWidth * 0.15, justifyContent: 'center' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <AntDesign
                                                name={'edit'}
                                                size={deviceWidth*0.05}
                                                style={{ color: gray }}
                                            />
                                            <AntDesign
                                                name={'delete'}
                                                size={deviceWidth*0.05}
                                                style={{ color: 'red' }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </ListItem>
                        )}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginBottom:deviceHight*0.02 }}>


                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("EditOwner"),
                                    AsyncStorage.setItem("EditOwner", JSON.stringify(this.state.data.profile));
                            }}>

                            <View style={{ width: deviceWidth * 0.4, height: deviceHight * 0.05, backgroundColor: appColor, alignItems: 'center', marginTop: deviceHight * 0.06 ,marginLeft:deviceWidth*0.07}}>
                                <Text style={{ color: '#fff', marginTop: deviceHight * 0.01 }}>Edit Profile</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {


                                console.log("this.state.data._id", this.state.data._id)
                                AsyncStorage.setItem("idOwner", JSON.stringify(this.state.data.profile._id)),
                                    this.props.navigation.navigate("AddPlayground")
                                // onGoBack: () => {
                                //     this.props.()
                                //     // }
                                // }

                                // )
                            }}>

                            <View style={{ width: deviceWidth * 0.4, height: deviceHight * 0.05, backgroundColor: appColor, alignItems: 'center', marginTop: deviceHight * 0.06,marginRight:deviceWidth*0.07 }}>
                                <Text style={{ color: '#fff', marginTop: deviceHight * 0.01 }}>Add Playground</Text>
                            </View>
                        </TouchableOpacity>


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

            <Tabs tabBarUnderlineStyle={{ backgroundColor: babyBlue, height: 2 }}
                tabContainerStyle={{
                    elevation: 0
                }}>
                <Tab heading="Profile" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: 'normal' }}>
                    <Container>
                        {rendercontent}
                        {Indicator}

                    </Container>
                </Tab>
                <Tab heading="Time Slots" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: 'normal' }}>
                    <Container>
                        <Content >

                            {/* <Calendar
                                // Initially visible month. Default = Date()
                                current={year + '-' + month + '-' + date}
                                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                                minDate={year + '-' + month + '-' + date}
                                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                                maxDate={year + '-' + month + '-' + JSON.stringify(parseInt(date) + 7)}
                                // current='2012-05-16'
                                // minDate='2012-05-16'
                                // maxDate='2012-05-19'

                                // Handler which gets executed on day press. Default = undefined
                                onDayPress={(day) => { console.log('selected day', day), this.covertTodayName(day.dateString) }}
                                // Handler which gets executed on day long press. Default = undefined
                                onDayLongPress={(day) => { console.log('selected day', day), this.covertTodayName(day.dateString) }}
                                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                                // monthFormat={'yyyy MM'}
                                // Handler which gets executed when visible month changes in calendar. Default = undefined
                                // onMonthChange={(month) => { console.log('month changed', month) }}
                                // Hide month navigation arrows. Default = false
                                hideArrows={true}
                                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                                renderArrow={(direction) => (<Arrow />)}
                                // Do not show days of other months in month page. Default = false
                                hideExtraDays={false}
                                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                                // day from another month that is visible in calendar page. Default = false
                                disableMonthChange={false}
                                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                                firstDay={1}
                                // Hide day names. Default = false
                                hideDayNames={false}
                                // Show week numbers to the left. Default = false
                                showWeekNumbers={false}
                                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                                onPressArrowLeft={substractMonth => substractMonth()}
                                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                                onPressArrowRight={addMonth => addMonth()}

                                markedDates={{

                                    [year + '-' + month + '-' + date]: { selected: true, marked: true, selectedColor: 'blue' },


                                }}


                            />  */}

                            <Agenda
                                pastScrollRange={5}
                                // Max amount of months allowed to scroll to the future. Default = 50
                                futureScrollRange={5}
                                onDayPress={(day) => { console.log('selected day', day), this.covertTodayName(day.dateString) }}
                                // selected={year + '-' + month + '-' + JSON.stringify(parseInt(date) + 7)}
                                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                                minDate={year + '-' + month + '-' + date}
                                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                                maxDate={year + '-' + month + '-' + JSON.stringify(parseInt(date) + 7)}

                                renderEmptyData={() => {
                                    return (
                                        <Tabs tabBarUnderlineStyle={{ backgroundColor: babyBlue, height: 2 }}
                                            tabContainerStyle={{
                                                elevation: 0
                                            }}>
                                            {this.state.data.courts.length > 0 && this.state.data.courts.map((data, index) =>

                                                <Tab key={data._id}
                                                    tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }}
                                                    activeTabStyle={{ backgroundColor: '#fff' }}
                                                    activeTextStyle={{ color: '#000', fontWeight: 'normal' }}
                                                    textStyle={{ color: '#556c7a', fontWeight: 'normal' }}
                                                    heading={data.name.en}>


                                                    {data.price.map((dataPrice, index) => {
                                                        if (dataPrice.day == "ALL") {
                                                            return (

                                                                <FlatList
                                                                    data={data.available}

                                                                    renderItem={({ item }) => (
                                                                        <ListItem >

                                                                            <Text>    {`${item.from}` + ' ' + `${item.to}`}</Text>

                                                                        </ListItem>
                                                                    )}
                                                                />
                                                            )

                                                        } else {

                                                            if (dataPrice.day == this.state.day) {
                                                                console.log(dataPrice.day, this.state.day)
                                                                return (

                                                                    <FlatList
                                                                        data={data.available}

                                                                        renderItem={({ item }) => (
                                                                            <ListItem >

                                                                                <Text>    {`${item.from}` + ' ' + `${item.to}`}</Text>

                                                                            </ListItem>
                                                                        )}
                                                                    />
                                                                )
                                                            }
                                                        }


                                                    }
                                                    )}




                                                </Tab>


                                            )}
                                        </Tabs>);
                                }}


                                style={{ height: deviceHight * 0.5 }}
                            />




                        </Content>

                    </Container>
                </Tab>
                <Tab heading="Bookings" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: 'normal' }}>
                    <Container>
                        <Content >

                            <View style={{ flexDirection: 'row', marginTop: deviceHight * 0.02 }}>
                                <View style={{ height: deviceHight * 0.001, width: deviceWidth * 0.45, backgroundColor: 'gray', marginTop: deviceHight * 0.02 }}></View>
                                <Text style={{ marginLeft: deviceWidth * 0.01, marginRight: deviceWidth * 0.01 }}>Today</Text>
                                <View style={{ height: deviceHight * 0.001, width: deviceWidth * 0.45, backgroundColor: 'gray', marginTop: deviceHight * 0.02 }}></View>
                            </View>

                            <FlatList
                                data={[1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]}
                                renderItem={entry =>
                                    <ListItem >
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ width: deviceWidth * 0.2 }}>
                                                <View>

                                                    <Text>Day</Text>
                                                    <Text>Hour</Text>
                                                </View>
                                            </View>

                                            <View style={{ width: deviceWidth * 0.4 }}>
                                                <View>

                                                    <Text>Al ma'aref field </Text>
                                                    <Text>Mahmood Naser </Text>
                                                </View>
                                            </View>
                                            <View style={{ width: deviceWidth * 0.2 }}>
                                                <View>
                                                    <Text>30 JOD</Text>
                                                    <Text>Visa</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ListItem>
                                }
                            />


                        </Content>

                    </Container>
                </Tab>
            </Tabs>
        )
    }
}