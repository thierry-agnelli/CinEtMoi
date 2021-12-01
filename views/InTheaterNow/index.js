// Dépendances
import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
// Contexte
import { AppContext } from "../../App";
// Composants
import { View, ScrollView, Image, Text } from "react-native";
import MoviesList from "../../assets/components/MoviesList/MoviesList";
// Styles
import commonStyles from "../../assets/styles/styles";
import themes from "../../assets/styles/theme";
import styles from "./styles";
// API
import { API_KEY } from "../../assets/helpers/API";

// Composant en Salle actuellement
const InTheaterNow = () => {
    // Context
    const context = useContext(AppContext);
    // State
    const [inTheaterList, setInTheaterList] = useState([]);

    let lastDay = moment().format().split('T')[0];
    let firstDay = moment().subtract(1, "month").format().split('T')[0];

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr&primary_release_date.gte=${firstDay}&primary_release_date.lte=${lastDay}`)
            .then(response => response.json())
            .then(jsonResponse => {
                setInTheaterList(jsonResponse.results)
            });
    }, []);

    return (
        <View style={[commonStyles.mainContainer,context.getCurrentTheme().background]}>
            <View style={styles.contentContainer}>
                <MoviesList moviesList={inTheaterList}/>
            </View>
        </View>
    )
};

export default InTheaterNow;