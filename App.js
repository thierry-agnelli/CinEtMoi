// Dépendances
import React, { useState, useEffect, createContext } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Accelerometer } from "expo-sensors";
// Composants
import { View, Text, Image } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Search from "./views/Search";
import InTheaterNow from "./views/InTheaterNow";
import Settings from "./views/Settings";
// Images
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import commonStyles from "./assets/styles/styles";
// Styles
import themes from "./assets/styles/theme";
import { useLayoutEffect } from "react/cjs/react.production.min";

// Cration du contexte
export const AppContext = createContext({});
// Création de la barre de navigation
const Tab = createMaterialTopTabNavigator();


export default function App() {
  // State
  // Themes
  const [currentTheme, setCurrentTheme] = useState("Light");
  // Chargement de l'app
  const [loading, setLoading] = useState(true);
  // Easter egg
  const [surpriseLauncher, setSurpriselauncher] = useState(false);

  // Fonction de récupération du theme
  const getCurrentTheme = () => {
    return themes[currentTheme];
  };

  // Vérification si un thème est enregistré dans le storage
  useEffect(() =>{
    (async () => {
    try {
      // Si oui changment du thèmes Light par défaut par le thème User
      let userTheme = await AsyncStorage.getItem("userTheme");
      if(userTheme != null)
        setCurrentTheme(userTheme);
    }
    catch {
      console.log("Pas de thème enregistré");
    }
  })();
  },[]);

  // Gestion de l'accéléromètre
  // Ecoute toutes les 1000ms
  Accelerometer.setUpdateInterval(1000);
  // récupération des données
  Accelerometer.addListener(AccelerometerData => {
    if (AccelerometerData.y <= -0.9)
      setSurpriselauncher(true);
    else
      setSurpriselauncher(false);
  });

  // Simulation chargement appli

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AppContext.Provider value={{ getCurrentTheme, currentTheme, setCurrentTheme }}>
          {loading ?
            <View style={commonStyles.loadingContainer}>
              <Image
                style={{
                  height: 300,
                  width: 300
                }}
                source={require("./assets/images/Magikarp.gif")}
              />
            </View>
            : !surpriseLauncher ?
              <NavigationContainer >
                <Tab.Navigator
                  tabBarOptions={{
                    activeTintColor: "#0A0000",
                    inactiveTintColor: "#A0A0A0",
                    showIcon: true,
                    showLabel: false
                  }}>
                  <Tab.Screen
                    name="intheaternow"
                    component={InTheaterNow}
                    options={{
                      tabBarIcon: (options) =>
                        <View style={{ alignSelf: "center", flexDirection: "row", width: 100 }}>
                          <FontAwesome5 name="film" color={options.color} size={15} />
                          <Text style={{ paddingLeft: 5, color: options.color }}>En salle</Text>
                        </View>
                    }} />
                  <Tab.Screen
                    name="recherche"
                    component={Search}
                    options={{
                      tabBarIcon: (options) =>
                        <View style={{ alignSelf: "center", flexDirection: "row", width: 100 }}>
                          <Ionicons name="search-outline" color={options.color} size={15} />
                          <Text style={{ paddingLeft: 5, color: options.color }}>Rechercher</Text>
                        </View>
                    }} />
                  <Tab.Screen name="settings"
                    component={Settings}
                    options={{
                      tabBarIcon: (options) =>
                        <View style={{ alignSelf: "center", flexDirection: "row", width: 100 }}>
                          <Ionicons name="settings-outline" color={options.color} size={15} />
                          <Text style={{ paddingLeft: 5, color: options.color }}>Réglages</Text>
                        </View>
                    }} />
                </Tab.Navigator>
              </NavigationContainer> :
              <WebView
                style={{ flex: 1 }}
                javaScriptEnabled={true}
                source={{ uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1" }}
              />
          }
        </AppContext.Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

