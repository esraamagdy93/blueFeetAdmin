


import React from 'react'
import { Container, Content, List, ListItem, Text, Input, View } from 'native-base';
import { TextInput, TouchableOpacity, Image } from 'react-native';
import styles, { deviceHight, appColor, deviceWidth, gray } from '../../../../styles/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';
import { client } from "../../../../config/api";
import gql from "graphql-tag";
import axios from "axios";
import { connect } from 'react-redux'
import { addService } from "../../actions";

class adminAddService extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            image: null,
            images: null,
            serviceImage: null,
            serviseName: null
        };
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);

    }
    componentDidMount() {

        this.props.ServicesReducer.addServiceDataSuccess = null
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

                    axios.post("http://64.225.43.177:2505/images", form, config).then(
                        response => {

                            this.setState({ serviceImage: response.data })
                            console.log(this.state.serviceImage
                            );

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
    componentWillUnmount() {
        this.props.navigation.state.params.onGoBack();
        this.props.navigation.goBack();
    }

    handleAddService = async () => {
        await this.props.addService(
            {
                serviseName: this.state.serviseName,
                serviceImage: this.state.serviceImage
                ,
            }

        );
        if (this.props.ServicesReducer.addServiceDataSuccess) {
            this.props.navigation.state.params.onGoBack();

            this.props.navigation.goBack()
        }


    }









    render() {
        if (this.props.ServicesReducer.addServiceDataSuccess) {
            //  this.props.navigation.state.params.onGoBack();

            this.props.navigation.goBack()
        }
        return (
            <Container>
                <Content >
                    <View style={[styles.container, { marginTop: deviceHight * 0.05 }]}>
                        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                            {
                                this.state.serviceImage ? (
                                    <View>

                                        <Image
                                            style={{ width: 100, height: 50 }}
                                            source={{ uri:"http://64.225.43.177:2505"+this.state.serviceImage }}
                                        >

                                        </Image>
                                        <Text>Upload Image</Text>
                                    </View>

                                ) : (
                                        <View>

                                            <AntDesign
                                                name={'upload'}
                                                size={26}
                                                style={{ color: appColor }}
                                            />
                                            <Text>Upload Image</Text>
                                        </View>
                                    )
                            }

                        </TouchableOpacity >
                        <TextInput
                            placeholder="Service Name"
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={serviseName => {
                                this.setState({ serviseName })
                            }}
                            value={this.state.serviseName}
                        />

                        <TouchableOpacity onPress={this.handleAddService}
                        >
                            <View style={{
                                width: deviceWidth * 0.8,
                                backgroundColor: appColor,
                                height: deviceHight * 0.09,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: deviceWidth * 0.1,
                                marginTop: deviceHight * 0.06, elevation: 3,
                                marginBottom: deviceHight * 0.01,
                            }}>
                                <Text style={{ fontSize: deviceWidth * 0.06, color: '#ffffff', fontWeight: '200' }}>Add Service</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>

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
        addService
    }
)(adminAddService)
