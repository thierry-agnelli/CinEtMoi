import { StyleSheet } from "react-native";

const themes = {
    Light: StyleSheet.create({
        background:{
            backgroundColor:"#FFFFFF",
        },
        container:{
            borderWidth: 2,
            borderColor: "#000000"
        },
        text:{
            color: "#000000"
        }
    }),
    Dark: StyleSheet.create({
        background:{
            backgroundColor:"#000000",
        },
        container:{
            borderWidth: 2,
            borderColor: "#FFFFFF"
        },
        text:{
            color: "#FFFFFF"
        }
    }),
    DarkPurple: StyleSheet.create({
        background:{
            backgroundColor:"#000000",
        },
        container:{
            borderWidth: 2,
            borderColor: "#FFFFFF"
        },
        text:{
            color: "#A000FF"
        }
    }),
    DarkGrey: StyleSheet.create({
        background:{
            backgroundColor:"#3A3A3A",
        },
        container:{
            borderWidth: 2,
            borderColor: "#A0A0A0"
        },
        text:{
            color: "#A0A0A0"
        }
    }),
}
export default themes;

// Récupérationd de la liste des thèmes
export const themesList = (()=>{
    let themesTab = [];
    for(const theme in themes){
        themesTab.push(theme);
    }

    return themesTab;
})();

