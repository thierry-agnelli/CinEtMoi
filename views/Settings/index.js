// Dépendances
import React, { useContext} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Contexte
import { AppContext } from "../../App";
// Composants
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
// Styles
import commonStyles from "../../assets/styles/styles";
import themes, { themesList } from "../../assets/styles/theme";
import styles from "./styles";

const Settings = () => {
    // Contexte
    const context = useContext(AppContext);
    // Thèmes
    const theme = context.getCurrentTheme();

    return (
        <View style={[commonStyles.mainContainer, theme.background]}>
            <View style={styles.titleContainer}>
                <Text style={[theme.text, styles.title]}>Paramètres</Text>
            </View>
            <ScrollView style={styles.paramsContainer}>
                <View style={styles.themeContainer}>
                    <Text style={[{ flex: 1 }, theme.text]}>Thèmes :</Text>
                    <View style={styles.themeItemsContainer}>
                        {themesList.map((themeItem) =>
                            <TouchableOpacity key={themeItem} onPress={async () => {
                                context.setCurrentTheme(themeItem);
                                try {
                                    await AsyncStorage.setItem("userTheme",themeItem);
                                }
                                catch (err){
                                    console.log("Enregistrement impossible");
                                    console.log(err);
                                }
                            }}
                                style={[theme.container, themes[themeItem].background, styles.themeItem]}>
                                <Text style={themes[themeItem].text}>42</Text>
                            </TouchableOpacity>)}
                    </View>
                    <Text style={theme.text}>{context.currentTheme}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Settings;