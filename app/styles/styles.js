import { StyleSheet, Dimensions } from "react-native";
export const deviceWidth = Dimensions.get("window").width;
export const deviceHight = Dimensions.get("window").height;
export const appColor = '#156fd6'
export const babyBlue = '#00decf'
export const gray = 'gray'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerHome: {
    flex: 1,
  },
  textInput: {
    fontSize: deviceWidth*0.04,
    width: '90%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: deviceHight*0.005,
    marginVertical: 15
  },
  textInputlocation: {
    fontSize: deviceWidth*0.04,
    width: '80%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: deviceHight*0.005,
    marginVertical: 10
  },
  textInputPrice: {
    height: 40,
    fontSize: 20,
    width: '50%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: deviceHight*0.005,
    marginVertical: 10
  },
  text: {
    fontSize: deviceWidth*0.045,
    marginTop: deviceHight*0.01,
  },
  viewIndicator:
  {
    flex: 1, alignItems: "center",
    justifyContent: "center"
  },
  viewheight: {
    height: deviceHight * 0.2
  },
  viewRelative:{
    width: deviceWidth,
    height: deviceHight,
    position: "relative" 
    },
    map: {
      flex: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
  },
})