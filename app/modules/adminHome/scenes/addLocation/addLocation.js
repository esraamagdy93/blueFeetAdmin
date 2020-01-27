



import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import styles, { appColor, deviceHight, deviceWidth } from '../../../.././styles/styles'
import { Content } from "native-base";
import MapView, { Marker } from "react-native-maps";
import AntDesign from 'react-native-vector-icons/Entypo';
import Geocoder from 'react-native-geocoding';

export const latitudeDelta = 3
export const longitudeDelta = 3
export default class addLocation extends React.Component {



      handleMarkerPress = () => {
   console.log("diiiii")
        Geocoder.from(this.state.latitude, this.state.longitude)
		.then(json => {
        		var addressComponent = json.results[0].address_components[0];
			console.log(addressComponent);
		})
		.catch(error => console.warn(error));

  }
    constructor(props) {
        super(props);
        this.state = {

            latitude: 21.258316,
            longitude: 56.348247,


        }

    }

    componentDidMount(){
        Geocoder.init("AIzaSyA1rzB9jj540SLbK2pEA8IyjZUdKGRfHWk"); // use a valid API key

    }
    onMapPress(e) {

        console.log("coordinates:" , JSON.stringify(e.nativeEvent))
        alert("coordinates:" + JSON.stringify(e.nativeEvent.coordinate.longitude))


        this.setState({
            latitude: e.nativeEvent.coordinate.latitude

        });

        this.setState({
            longitude: e.nativeEvent.coordinate.longitude

        });

    }
    render() {
        return (


            <Content>
                <View style={styles.viewRelative}>
                    <MapView
                        style={styles.map}
                        // zoomEnabled={true}
                        mapType={"standard"}
                        initialRegion={{
                            latitude: parseFloat(20.4458239),
                            longitude: parseFloat(56.4304921),
                            latitudeDelta: latitudeDelta,
                            longitudeDelta: longitudeDelta
                        }}
                        onPress={this.onMapPress.bind(this)}

                    >

                        <MapView.Marker
                            coordinate={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude
                            }}
                            onPress={this.handleMarkerPress}
                            
                        />


                        {/* <MapView.Marker
                            // key={location._id}
                            coordinate={{ latitude: this.state.latitude, longitude:  this.state.latitude }}
                            // title={location.name}
                            // description={location.description}
                            // style={styles.marker}
                            // anchor={{ x: 0.20, y: 0.5 }}
                            
                        >
                            <AntDesign
                                name={'location'}
                                size={28}
                                style={{ color: appColor, marginTop: deviceHight * 0.03, marginLeft: deviceWidth * 0.03 }}
                            />
                        </MapView.Marker> */}
                        {/* <Marker
                            coordinate={{
                                latitude: parseFloat(infoReducer.visitUs.latitude),
                                longitude: parseFloat(infoReducer.visitUs.longtude)
                            }}
                            image={images.Visitus.location}
                            title={"IBS"}
                            style={visitusStyle.marker}
                        /> */}
                    </MapView>
                </View>
            </Content>

        )
    }
}




