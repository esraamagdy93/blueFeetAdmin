import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import AdminLogin from "./app/modules/auth/scenes/adminLogin"
import AdminHome from "./app/modules/adminHome/scenes/adminHome"
import AddOwner from "./app/modules/adminHome/scenes/addOwner"

import {  Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { appColor, deviceWidth, deviceHight, gray } from './app/styles/styles';
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
  // AddOwner: {
  //   screen: AddOwner,
  //   navigationOptions: ({ navigation }) => ({
  //     title: 'Add Owner',
  //     headerStyle: {
  //       elevation: 0,
  //       backgroundColor: appColor,

  //     }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

  //     headerTintColor: '#fff',
  //   }),
  // },
});


const AppNavigation = createStackNavigator({
 
  Tabs: tabs,
  AddOwner: {
    screen: AddOwner,
    navigationOptions: () => ({
      header: null
    })
  },
});

const tabs = createBottomTabNavigator({
  screen1: {
    screen: home,
    navigationOptions: {
      tabBarLabel: ({ tintColor, focused }) => (
        <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005,fontWeight:'bold' }}
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
    screen: home,
    navigationOptions: {
      tabBarLabel: ({ tintColor, focused }) => (
        <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005 ,fontWeight:'bold'}}
        >Notifications</Text>
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
    screen: home,
    navigationOptions: {
      tabBarLabel: ({ tintColor, focused }) => (
        <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005 ,fontWeight:'bold'}}
        >Services</Text>
      ),

      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome5
          name={'servicestack'}
          size={26}
          style={focused ? { color: appColor } : { color: 'gray' }}
        />
      ),
    },


  },
  screen4: {
    screen: home,
    navigationOptions: {
      tabBarLabel: ({ tintColor, focused }) => (
        <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005,fontWeight:'bold' }}
        >Offers</Text>
      ), tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome5
          name={'percent'}
          size={18}
          style={focused ? { color: appColor } : { color: 'gray' }}
        />
      ),
    },


  },
  screen5: {
    screen: home,
    navigationOptions: {
      tabBarLabel: ({ tintColor, focused }) => (
        <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight:'bold'}}
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
  screen6: {
    screen: home,
    navigationOptions: {
      tabBarLabel: ({ tintColor, focused }) => (
        <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005,fontWeight:'bold' }}
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

  initialRouteName: "AdminLogin",
  headerMode: "none"

});

const MainNavigation = createSwitchNavigator({
  AuthStack: AuthStackNavigation,
  AppStack: AppNavigation,



  // You will use this.props.navigation.replace('HomeDrawer') after login process.
})

const App = createAppContainer(MainNavigation);

export default App;