// Dépendances
import React, { useState, useContext } from "react";
// Contexte
import { AppContext } from "../../App";
// Composants
import { View, TextInput, Button, ScrollView, Text, Image } from "react-native";
import MoviesList from "../../assets/components/MoviesList/MoviesList";
// Styles
import commonStyles from "../../assets/styles/styles";
import styles from "./styles";
// API
import { API_KEY } from "../../assets/helpers/API";

const Search = () => {
    // Contexte
    const context = useContext(AppContext);
    // State
    const [search, setSearch] = useState("");
    const [moviesDate, setMoviesData] = useState([]);

    // Handles
    const handleSetSearch = (text) => {
        setSearch(text);
    }

    // Récupération de données depuis l'API
    const getDataFromAPI = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr&query=${search}`)
            .then(response => response.json())
            .then(jsonResponse => {
                setMoviesData(jsonResponse.results);
            });
    }

    return (
        <View style={[commonStyles.mainContainer, context.getCurrentTheme().background]}>
            <View style={styles.searchContainer}>
                <TextInput onChangeText={handleSetSearch} style={[context.getCurrentTheme().text ,styles.searchInput]} placeholder="Votre recherche..." />
                <Button onPress={getDataFromAPI} title="Rechercher" />
            </View>
            <View style={styles.contentContainer}>
                <MoviesList moviesList={moviesDate} />
            </View>
        </View>
    );
};

export default Search;