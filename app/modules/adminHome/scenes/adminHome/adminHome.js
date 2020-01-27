import React from 'react'
import { FlatList } from 'react-native'
import styles, { babyBlue, appColor, deviceHight, deviceWidth } from '../../../.././styles/styles'
import { Container, Header, Button, Icon, Fab, Content, List, ListItem, Text, Tab, Tabs, View, Left, Body, Right } from 'native-base';
import { getOwnersWithThemCourtsData } from "../../actions";
import { connect } from 'react-redux'


class adminHome extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  componentDidMount() {
    this.props.getOwnersWithThemCourtsData()

  }
  render() {

    return (
      <Tabs tabBarUnderlineStyle={{ backgroundColor: babyBlue, height: 2 }}
        tabContainerStyle={{
          elevation: 0
        }}>
        <Tab heading="Booking" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: 'normal' }}>
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
                  <ListItem onPress={() => this.props.navigation.navigate("BookingDetails")}>
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
        <Tab heading="Owners" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: 'normal' }}>
          <Container>
            <Content >
              <FlatList
                data={this.props.AdminBookingOwnerReducer.getOwnersWithThemCourtsDataSuccess}

                renderItem={({ item }) => (
                  <ListItem onPress={() => this.props.navigation.navigate("OwnerProfile", { item })}>

                    <Text>      {`${item.profile.name.first}` + ' ' + `${item.profile.name.last}`}</Text>

                  </ListItem>
                )}
              />


            </Content>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: appColor }}
              position="bottomRight"
              onPress={
                () =>
                this.props.navigation.navigate("AddOwner", {
                    onGoBack: () => {
                      this.props.AdminBookingOwnerReducer.addOwnerDataSuccess=null
                        this.props.getOwnersWithThemCourtsData()
                        
                    }
                })

            }
              
              >
              <Icon name="add" />

            </Fab>
          </Container>
        </Tab>
      </Tabs>
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
    getOwnersWithThemCourtsData
  }
)(adminHome)


// import React from 'react'
// import { FlatList,Image } from 'react-native'
// import styles, { babyBlue, appColor, deviceHight, deviceWidth } from '../../../.././styles/styles'
// import { Container, Header, Button, Icon, Fab, Content, List, ListItem, Text, Tab, Tabs, View, Left, Body, Right } from 'native-base';

// import profile from "./../../.././../images/profile.jpg"

// export default class adminHome extends React.Component {
//   state = { email: '', password: '', errorMessage: null }

//   render() {

//     return (
//       <Tabs tabBarUnderlineStyle={{ backgroundColor: babyBlue, height: 2 }}
//         tabContainerStyle={{
//           elevation: 0
//         }}>
//         <Tab heading="Around" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: 'normal' }}>
//           <Container>
//             <Content >


//               <FlatList
//                 data={[1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]}
//                 renderItem={entry =>
//                   <ListItem onPress={() => this.props.navigation.navigate("BookingDetails")}>
//                     <View style={{ flexDirection: 'row' }}>
//                       <View style={{ width: deviceWidth * 0.2 }}>
//                         <View>

//                           <Image style={{
//  width: deviceHight * 0.1, height: deviceHight * 0.06,
//     borderRadius: deviceHight * 0.1 / 1.3,                     }}
//                             source={ profile}
//                             resizeMode="contain"

//                           />               
//                                    </View>
//                       </View>

//                       <View style={{ width: deviceWidth * 0.4 }}>
//                         <View>

//                           <Text>Mahmoud Ba'ara</Text>
//                           <View style={{ flexDirection: 'row' }}>
//                             <Text style={{ color: 'gray' }}>24yr </Text>
//                             <View style={{ height: deviceHight * 0.02, width: deviceWidth * 0.015, backgroundColor: 'blue', marginLeft: deviceWidth * 0.02, marginTop: deviceHight * 0.005, marginRight: deviceWidth * 0.01 }}></View>
//                             <Text style={{ color: 'gray' }}> Forward </Text>

//                           </View>
//                         </View>
//                       </View>
//                       <View style={{ width: deviceWidth * 0.2, marginLeft: deviceWidth * 0.07 }}>
//                         <View style={{ width: deviceWidth * 0.2, height: deviceHight * 0.05, backgroundColor: 'green', alignItems: 'center' }}>
//                           <Text style={{ color: '#fff', marginTop: deviceHight * 0.01 }}>Add</Text>
//                         </View>
//                       </View>
//                     </View>
//                   </ListItem>
//                 }
//               />


//             </Content>

//           </Container>
//         </Tab>
//         <Tab heading="Added" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: 'normal' }}>
//           <Container>
//             <Content >
//                <FlatList
//                 data={[1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]}
//                 renderItem={entry =>
//                   <ListItem onPress={() => this.props.navigation.navigate("BookingDetails")}>
//                     <View style={{ flexDirection: 'row' }}>
//                       <View style={{ width: deviceWidth * 0.2 }}>
//                         <View>

//                           <Image style={{
//  width: deviceHight * 0.1, height: deviceHight * 0.06,
//     borderRadius: deviceHight * 0.1 / 1.3,                     }}
//                             source={ profile}
//                             resizeMode="contain"

//                           />               
//                                    </View>
//                       </View>

//                       <View style={{ width: deviceWidth * 0.4 }}>
//                         <View>

//                           <Text>Mahmoud Ba'ara</Text>
//                           <View style={{ flexDirection: 'row' }}>
//                             <Text style={{ color: 'gray' }}>24yr </Text>
//                             <View style={{ height: deviceHight * 0.02, width: deviceWidth * 0.015, backgroundColor: 'blue', marginLeft: deviceWidth * 0.02, marginTop: deviceHight * 0.005, marginRight: deviceWidth * 0.01 }}></View>
//                             <Text style={{ color: 'gray' }}> Forward </Text>

//                           </View>
//                         </View>
//                       </View>
//                       <View style={{ width: deviceWidth * 0.2, marginLeft: deviceWidth * 0.07 }}>
//                         <View style={{ width: deviceWidth * 0.2, height: deviceHight * 0.05, backgroundColor: 'green', alignItems: 'center' }}>
//                           <Text style={{ color: '#fff', marginTop: deviceHight * 0.01 }}>chat</Text>
//                         </View>
//                       </View>
//                     </View>
//                   </ListItem>
//                 }
//               />

//             </Content>
//             {/* <Fab
//               active={this.state.active}
//               direction="up"
//               containerStyle={{}}
//               style={{ backgroundColor: appColor }}
//               position="bottomRight"
//               onPress={() => this.props.navigation.navigate("AddOwner")}>
//               <Icon name="add" />

//             </Fab> */}
//           </Container>
//         </Tab>
//       </Tabs>
//     )
//   }
// }


