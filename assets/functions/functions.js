import { Dimensions } from "react-native";

export const getHeight = (ratio = 100) => {
    return Dimensions.get('screen').height*ratio/100;
};

export const getWidth = (ratio = 100) => {
    return Dimensions.get('screen').width*ratio/100;
};
