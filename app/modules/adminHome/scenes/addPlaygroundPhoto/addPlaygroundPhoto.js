
import React from 'react'
import { TextInput, FlatList, TouchableOpacity, Image ,AsyncStorage} from 'react-native';
import styles, { deviceHight, appColor, deviceWidth, gray } from '../../../../styles/styles';
import AntDesign from 'react-native-vector-icons/Entypo';
import { Container, Header, Content, Icon, Picker, Form, Text, View, Button, ListItem, CheckBox, Body, Item, Left } from "native-base";
import ImagePicker from 'react-native-image-picker';
import axios from "axios";

export default class booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            images: null,
            serviceImage: null,
            serviseName: null,
            serviceImage2: null,
            imageList:[]
        };
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);

    }
    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };
        ImagePicker.showImagePicker(options,
            images => {

                var form = new FormData();
                form.append("image", {
                    uri: images.uri,
                    type: images.type,
                    name: images.fileName
                }); try {


                    const config = {
                        headers: {
                            "Accept": 'application/json',
                            'Content-Type': 'multipart/form-data',
                        }
                    };

                    axios.post("https://bluefeets.com/images", form, config).then(
                        response => {
                            if (this.state.serviceImage) {
                                this.setState({ serviceImage2: response.data })
                                this.setState({ imageList: [this.state.serviceImage,this.state.serviceImage2] })

                            } else {

                                this.setState({ serviceImage: response.data })
                                this.setState({ imageList: [this.state.serviceImage] })

                            }
                            console.log(this.state.serviceImage);
                            
                        },
                        error => {
                            console.log({ error });
                        }
                    )
                } catch (error) {
                    alert(error);
                }
            }



        )
    }


    render() {
        return (
            <Container>
                <Content >
                    <View style={[{ marginTop: deviceHight * 0.05 }]}>
                        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>

                            <View style={{ alignContent: 'center', alignItems: 'center' }}>

                                <AntDesign
                                    name={'upload'}
                                    size={26}
                                    style={{ color: appColor }}
                                />
                                <Text style={{ marginTop: deviceHight * 0.02 }}>Upload Image</Text>
                            </View>


                        </TouchableOpacity>
                    </View>
                    {
                        this.state.serviceImage2 ? (
                            <View style={{ flexDirection: 'row', marginTop: deviceHight * 0.1 }}>
                                <Image
                                    style={{ width: deviceWidth * 0.4, height: deviceHight * 0.2, marginLeft: deviceWidth * 0.05 }}
                                    source={{ uri: "https://bluefeets.com" + this.state.serviceImage }}
                                >

                                </Image>
                                <Image
                                    style={{ width: deviceWidth * 0.4, height: deviceHight * 0.2, marginLeft: deviceWidth * 0.1 }}
                                    source={{ uri: "https://bluefeets.com" + this.state.serviceImage2 }}
                                >

                                </Image>


                            </View>) :

                            this.state.serviceImage ? (
                                <View style={{ flexDirection: 'row', marginTop: deviceHight * 0.1 }}>

                                    <Image
                                        style={{ width: deviceWidth * 0.4, height: deviceHight * 0.2, marginLeft: deviceWidth * 0.05 }}
                                        source={{ uri: "https://bluefeets.com" + this.state.serviceImage }}
                                    >

                                    </Image>
                                </View>
                            ) : (
                                    <View style={{ flexDirection: 'row', marginTop: deviceHight * 0.1 }}>
                                    </View>
                                )
                    }
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: deviceHight * 0.3 }}>
                        <Button onPress={() => {
                            this.props.navigation.navigate("AddPlaygroundTimes"),
                            AsyncStorage.setItem("Photo", JSON.stringify(this.state.imageList));

                        }}
                            style={{ width: deviceWidth * 0.4, justifyContent: 'center', backgroundColor: appColor, marginTop: deviceHight * 0.01 }}><Text> Next </Text></Button>
                    </View>

                </Content>

            </Container>
        )
    }
}
