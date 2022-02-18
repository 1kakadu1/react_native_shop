import React from 'react';
import { View } from 'react-native';
import { stylesHome } from './home.styles';
import { statusBar } from '../../consts/colors.const';
import { StatusBar } from 'expo-status-bar';
import { ProductsContainer } from '../../components/products/products.container';
import { SearchModule } from '../../components/search/search.module';

const Home = () => {
    const styles = stylesHome;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.bg[60]} style="light" />
            <ProductsContainer />
            <SearchModule.component />
        </View>
    );
};

export default Home;
