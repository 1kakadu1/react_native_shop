import React from 'react';
import { View } from 'react-native';
import { PostItemContainer } from '../../components/post-screen/post-screen.container';
import { stylesPost } from './post.styles';
import { StatusBar } from 'expo-status-bar';
import { statusBar } from '../../consts/colors.const';
import { PostDefault } from '../../components/containers/post/container.component';
import { CartBtnContainer } from '../../components/cart-btn/cart-brn.container';
import { ShareModule } from '../../components/share/share.module';

const Post = () => {
    const styles = stylesPost;

    const factory = [ShareModule.component, CartBtnContainer];

    const Factory = (props?: any) => {
        return factory.map((item, index) => (
            <View key={index}>{item(props)}</View>
        ));
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.color.black} style="light" />
            <PostDefault back={true} rightComponent={Factory}>
                <PostItemContainer />
            </PostDefault>
        </View>
    );
};

export default Post;
