import React from 'react';
import { FlatList, View } from 'react-native';
import { IHistoryProps } from './history.model';
import { stylesFlatListSeparator, stylesHistory } from './history.styles';
import { CardHistory } from '../../card/card-history/cart-history.component';

const renderSeparatorDefault = () => (
    <View style={stylesFlatListSeparator.separator} />
);

export const History = ({ orders, isLoad }: IHistoryProps) => {
    const styles = stylesHistory;

    return (
        <View style={styles.container}>
            {orders.length > 0 && !isLoad && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[styles.scrollView]}
                    data={orders}
                    renderItem={({ item }) => (
                        <CardHistory data={item} height={170}/>
                    )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={renderSeparatorDefault}
                />
            )}
        </View>
    );
};
