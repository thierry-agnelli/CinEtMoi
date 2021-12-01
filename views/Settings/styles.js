import { StyleSheet } from "react-native";
import { getHeight, getWidth } from "../../assets/functions/functions";

const styles = StyleSheet.create({
    titleContainer:{
        flex:1,
    },
    title:{
        fontSize: 25,
    },
    paramsContainer:{
        height: "85%",
    },
    themeContainer:{
        height: getHeight(8),
    },
    themeItemsContainer:{
        flex:2,
        flexDirection:"row",
    },
    themeItem:{
        margin: 5,
        width: getWidth(8),
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    }
});

export default styles;