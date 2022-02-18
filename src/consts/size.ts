import { Dimensions } from 'react-native';

export const cartPanel = 62;
export const widthScreen = Dimensions.get('window').width;
export const heightScreen = Dimensions.get('window').height;

export const sizeOffset = () => {
    if (widthScreen < 340) {
        return 0.65;
    }

    return 1;
};
