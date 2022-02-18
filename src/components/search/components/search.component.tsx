import React from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { stylesSearch } from './search.styles';
import { ISearchProps } from './search.model';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import { SearchItem } from './item/search-item.component';
import { primary } from '../../../consts/colors.const';

export const Search = ({
    isOpen,
    onClose,
    query,
    result,
    deviceWidth,
    onChangeSearch,
    height = 240,
    isLoad
}: ISearchProps) => {
    const styles = stylesSearch;

    return (
        <Modal
            isVisible={isOpen}
            onBackButtonPress={onClose}
            onBackdropPress={onClose}
            deviceWidth={deviceWidth}
            backdropTransitionOutTiming={0}
            style={styles.modal}
            onSwipeComplete={onClose}
            backdropOpacity={0.3}
            swipeDirection="down"
            avoidKeyboard={true}
        >
            <KeyboardAvoidingView
                behavior="padding"
                enabled
                style={{ flex: 1 }}
                keyboardVerticalOffset={height}
            >
                <View style={[styles.container, { height, minHeight: height }]}>
                    <View style={styles.hrWrap}>
                        <View style={styles.hr}></View>
                    </View>

                    <View style={styles.search}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={(text) => onChangeSearch(text)}
                            value={query}
                        />
                        {isLoad && (
                            <View style={styles.loader}>
                                <ActivityIndicator
                                    size="large"
                                    color={primary[1]}
                                />
                            </View>
                        )}
                    </View>

                    <ScrollView style={styles.result}>
                        {result.length === 0 && (
                            <View style={styles.resultEmpty}>
                                <Animatable.Image
                                    animation={'fadeIn'}
                                    delay={400}
                                    source={require('./resources/search-empty.png')}
                                />
                            </View>
                        )}
                        {result.map((item, index) => (
                            <SearchItem
                                key={'search-' + item.id}
                                title={item.title}
                                price={item.price}
                                index={index}
                                size={item.filters.size}
                                id={item.id}
                                preview={item.preview}
                                onClose={onClose}
                            />
                        ))}
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};
