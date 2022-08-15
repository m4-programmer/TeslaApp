import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        padding: 10,
        position: "absolute",
        top: 15,
        zIndex: 100,
        justifyContent: 'space-between',
        width: '100%'
    },
    logo:{
        height: 40,
        width: 120,
        resizeMode: 'contain',
        
    },
    menu:{
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },
})

export default styles