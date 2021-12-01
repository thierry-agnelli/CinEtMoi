import { StyleSheet } from "react-native";
import getHeight from "../functions/functions"

const commonStyles = StyleSheet.create({
    loadingContainer:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    mainContainer:{
        flex:1,
        padding: 5,
    }
});

export default commonStyles;