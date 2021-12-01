// Dépendances
import { StyleSheet } from "react-native";
// Fonctions
import { getHeight } from "../../functions/functions";

const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
    },
    moviesScroller:{
        flex:1
    },
    moviesItem:{
        height: getHeight(40),
        marginHorizontal: 2,
        marginVertical: 5,
    },
    Infos:{
        flex:2,
        flexDirection:"row",
    },
    PosterContainer:{
        flex:1,
    },
    poster:{
        flex:1
    },
    details:{
        flex:2,
        paddingLeft:5,
    },
    detailsHeader:{
        flex:1,
        flexDirection:"row"
    },
    titles:{
        flex:4,
    },
    localTitleContainer:{
        // flex:2,
    },
    originalTitleContainer:{
        flex:1,
    },
    originalTitle:{
        fontStyle:"italic",
        fontSize: 10
    },
    popularityContainer:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    popularity:{
        fontSize:20,
        fontWeight:"bold"
    },
    releaseContainer:{
        flex:1,
    },
    other:{
        flex:2,
    },
    Pitch:{
        flex:1,
    },
});

export default styles;