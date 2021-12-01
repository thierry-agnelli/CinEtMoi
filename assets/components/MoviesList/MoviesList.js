// Dépendances
import React, {useContext} from "react";
// Context
import { AppContext } from "../../../App";
// Composants
import { View, ScrollView, Image, Text } from "react-native";
// Styles
import styles from "./styles";


const MoviesList = (props) => {
    const context = useContext(AppContext);

    const theme = context.getCurrentTheme();

    return (
        <View style={{flex:1}}>
            {props.moviesList != undefined ?
                <ScrollView style={styles.moviesScroller}>
                    {props.moviesList.map((moviesItem) =>
                        <View key={moviesItem.id} style={styles.moviesItem}>
                            <View style={styles.Infos}>
                                <View style={styles.PosterContainer}>
                                    <Image
                                        style={styles.poster}
                                        source={{
                                            uri: `https://image.tmdb.org/t/p/w500${moviesItem.poster_path}`
                                        }} />
                                </View>
                                <View style={styles.details}>
                                    <View style={styles.detailsHeader}>
                                        <View style={styles.titles}>
                                            <View style={styles.localTitleContainer}>
                                                <Text style={theme.text}>{moviesItem.title}</Text>
                                            </View>
                                            <View style={styles.originalTitleContainer}>
                                                <Text style={[theme.text, styles.originalTitle]}>{moviesItem.original_title}, {moviesItem.original_language} </Text>
                                            </View>
                                        </View>
                                        <View style={styles.popularityContainer}>
                                            <Text style={[theme.text, styles.popularity]}>{moviesItem.vote_average * 10}%</Text>
                                        </View>
                                    </View>
                                    <View style={styles.releaseContainer}>
                                        <Text style={theme.text}>Sortie le :</Text>
                                        <Text style={theme.text}>{moviesItem.release_date}</Text>
                                    </View>
                                    <View style={styles.other}>
                                        <Text></Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.Pitch}>
                                <Text style={theme.text} numberOfLines={7}>{moviesItem.overview}</Text>
                            </View>
                        </View>
                    )}
                </ScrollView> : null}
        </View>
    )
};

export default MoviesList;