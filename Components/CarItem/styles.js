import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height,
        resizeMode: "cover",
    },
    textContainer: {
        alignItems: "center",
        marginTop: '30%'
         
    },
    title:{
        fontSize: 40,
        fontWeight: '500',
        alignItems: "center",
    },
    price:{
        fontSize: 16,
        color: '#5c5e62'
    },
    buttons: {
        position: "absolute",
        bottom: 20,
        width: '100%'
    }
})

export default styles