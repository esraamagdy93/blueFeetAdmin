import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import AdminLogin from ".//../../app/modules/auth/scenes/adminLogin"
import AdminHome from ".//../../app/modules/adminHome/scenes/adminHome"
import AddOwner from ".//../../app/modules/adminHome/scenes/addOwner"
import AdminServices from ".//../../app/modules/adminServices/scenes/adminServices"
import AddServices from ".//../../app/modules/adminServices/scenes/addServices"
import OwnerProfile from ".//../../app/modules/adminHome/scenes/ownerProfile"
import AddPlayground from ".//../../app/modules/adminHome/scenes/addPlayground"
import AddLocation from ".//../../app/modules/adminHome/scenes/addLocation"
import AddPlaygroundPhoto from ".//../../app/modules/adminHome/scenes/addPlaygroundPhoto"
import AddPlaygroundTimes from ".//../../app/modules/adminHome/scenes/addPlaygroundTimes"
import AddPlaygroundPrice from ".//../../app/modules/adminHome/scenes/addPlaygroundPrice"
import BookingDetails from ".//../../app/modules/adminHome/scenes/bookingDetails"
import EditOwner from ".//../../app/modules/adminHome/scenes/editOwner"

import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { appColor, deviceWidth, deviceHight, gray } from './/../../app/styles/styles';
import { View } from 'native-base';
const home = createStackNavigator({
    AdminHome: {
        screen: AdminHome,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },

});
const Services = createStackNavigator({
    AdminServices: {
        screen: AdminServices,
        navigationOptions: ({ navigation }) => ({
            title: 'Services',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },

});


const tabs = createBottomTabNavigator({
    screen1: {
        screen: home,
        navigationOptions: {
            tabBarLabel: ({ tintColor, focused }) => (
                <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
                >Home</Text>
            ),

            tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons
                    name={'soccer-field'}
                    size={26}
                    style={focused ? { color: appColor } : { color: 'gray' }}
                />
            ),
        },


    },
    screen2: {
        screen: Services,
        navigationOptions: {
            tabBarLabel: ({ tintColor, focused }) => (
                <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
                >Notification</Text>
            ),
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={'md-notifications'}
                    size={26}
                    style={focused ? { color: appColor } : { color: 'gray' }}
                />
            ),
        },


    },
    screen3: {
        screen: Services,
        navigationOptions: {
            tabBarLabel: ({ tintColor, focused }) => (
                <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
                >Services</Text>
            ),

            tabBarIcon: ({ tintColor, focused }) => (
                <FontAwesome5
                    name={'servicestack'}
                    size={26}
                    style={focused ? { color: appColor } : { color: 'gray' }}
                />
                //  <FontAwesome5
                //     name={'percent'}
                //     size={18}
                //     style={focused ? { color: appColor } : { color: 'gray' }}
                // />
            ),
        },


    },
    screen4: {
        screen: home,
        navigationOptions: {
            tabBarLabel: ({ tintColor, focused }) => (
                <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
                >Inquiries</Text>
            ), tabBarIcon: ({ tintColor, focused }) => (

                <MaterialCommunityIcons
                    name={'wechat'}
                    size={26}
                    style={focused ? { color: appColor } : { color: 'gray' }}
                />
            ),
        },


    },
    // screen5: {
    //     screen: home,
    //     navigationOptions: {
    //         tabBarLabel: ({ tintColor, focused }) => (
    //             <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
    //             >profile</Text>
    //         ), tabBarIcon: ({ tintColor, focused }) => (
    //             <MaterialCommunityIcons
    //                 name={'wechat'}
    //                 size={26}
    //                 style={focused ? { color: appColor } : { color: 'gray' }}
    //             />
    //         ),
    //     },


    // },
    screen6: {
        screen: home,
        navigationOptions: {
            tabBarLabel: ({ tintColor, focused }) => (
                <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
                >Profile</Text>
            ), tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={'ios-person'}
                    size={30}
                    style={focused ? { color: appColor } : { color: 'gray' }}
                />
            ),
        },


    },



}, {
    lazy: true,
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        showLabel: true,
        showIcon: true,
        pressColor: 'grey',
        upperCaseLabel: true,
        style: {
            backgroundColor: 'white',
            elevation: 20
        },
        labelStyle: {
            fontSize: 10,
            margin: 0,
        },
        indicatorStyle: {
            backgroundColor: "red"
        }
    }

}

)

const AuthStackNavigation = createStackNavigator({
    Login: {
        screen: AdminLogin,
        navigationOptions: () => ({
            header: null
        })
    },


});
const AppNavigation = createStackNavigator({
    Stack: {
        screen: tabs,
        navigationOptions: () => ({
            header: null
        })
    },
    AddOwner: {
        screen: AddOwner,
        navigationOptions: ({ navigation }) => ({
            title: 'Add Owner',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },
    EditOwner: {
        screen: EditOwner,
        navigationOptions: ({ navigation }) => ({
            title: 'Edit Owner',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },
    AddServices: {
        screen: AddServices,
        navigationOptions: ({ navigation }) => ({
            title: 'Add Service',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },
    OwnerProfile: {
        screen: OwnerProfile,
        navigationOptions: ({ navigation }) => ({
            title: 'Owner Profile',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },
    BookingDetails: {
        screen: BookingDetails,
        navigationOptions: ({ navigation }) => ({
            title: 'Booking Details',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },
    AddPlayground: {
        screen: AddPlayground,
        navigationOptions: ({ navigation }) => ({
            title: 'Add Playground',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },

    AddLocation: {
        screen: AddLocation,
        navigationOptions: ({ navigation }) => ({
            title: 'Add Location',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },

    AddPlaygroundPhoto: {
        screen: AddPlaygroundPhoto,
        navigationOptions: ({ navigation }) => ({
            title: 'Add Photo',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },
    AddPlaygroundTimes: {
        screen: AddPlaygroundTimes,
        navigationOptions: ({ navigation }) => ({
            title: 'Add Times',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },
    AddPlaygroundPrice: {
        screen: AddPlaygroundPrice,
        navigationOptions: ({ navigation }) => ({
            title: 'Add Price',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),
    },


});

const MainNavigation = createSwitchNavigator({
    AuthStack: AuthStackNavigation,
    AppStack: AppNavigation,



    // You will use this.props.navigation.replace('HomeDrawer') after login process.
})

const App = createAppContainer(MainNavigation);

export default class AllympiaCourts extends Component {
    render() {
        return (
            <App />
        )
    }

}
