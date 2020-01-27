import React from 'react'
import { FlatList, Image } from 'react-native'
import styles, { babyBlue, appColor, deviceHight, deviceWidth, gray } from '../../../../styles/styles'
import { Container, Header, Button, Icon, Fab, Content, List, ListItem, Text, Tab, Tabs, View, Left, Body, Right } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import toilet from "../../../../images/toilet.png"
import { getServicesAction } from "../../actions";
import { connect } from 'react-redux'

class adminServices extends React.Component {
    state = { email: '', password: '', errorMessage: null }

    componentDidMount() {
        console.log("dsfsd")
        this.props.getServicesAction()
    }
    componentDidUpdate() {
        console.log("onbackk")
    }
    render() {
        return (

            <Container>
                <Content >

                    <FlatList
                        data={this.props.ServicesReducer.getServiceDataSuccess}
                        renderItem={({ item }) => (
                            <ListItem   >
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: deviceWidth * 0.2 }}>
                                        <View>

                                            <Image style={{
                                                width: deviceWidth * 0.06, height: deviceHight * 0.08,
                                            }}
                                                source={{ uri: "http://64.225.43.177:2505" + item.logo }}
                                                resizeMode="contain"

                                            />
                                        </View>
                                    </View>

                                    <View style={{ width: deviceWidth * 0.4, justifyContent: 'center' }}>
                                        <View>

                                            <Text>      {`${item.name.en}`}</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: deviceWidth * 0.2, justifyContent: 'center' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <AntDesign
                                                name={'edit'}
                                                size={26}
                                                style={{ color: gray }}
                                            />
                                            <AntDesign
                                                name={'delete'}
                                                size={26}
                                                style={{ color: 'red' }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </ListItem>
                        )
                        }

                    // keyExtractor={(item, index) => index.toString()}

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
                            this.props.navigation.navigate("AddServices", {
                                onGoBack: () => {
                                    this.props.getServicesAction()
                                    this.props.ServicesReducer.addServiceDataSuccess = null

                                }
                            })

                    }>
                    <Icon name="add" />

                </Fab>
            </Container>

        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        ServicesReducer: state.ServicesReducer,
    };
}
export default connect(
    mapStateToProps,
    {
        getServicesAction
    }
)(adminServices)
