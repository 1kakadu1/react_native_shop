import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Badge } from 'react-native-paper';
import { ICartPanelProps } from './cart-panel.model';
import { stylesCartPanel } from './cart-panel.styles';

export const CartPanel = ({
    item,
    size,
    onAdd,
    onSub,
    onSize
}: ICartPanelProps) => {
    const styles = stylesCartPanel;
    return (
        <View style={styles.container}>
            <View style={styles.colLeft}>
                <View style={styles.size}>
                    {item.filters.size.map((i) => (
                        <TouchableOpacity
                            style={[
                                styles.sizeBtn,
                                size === i && styles.sizeBtnActive
                            ]}
                            onPress={() => onSize(i)}
                            key={i}
                        >
                            <Badge
                                style={styles.sizeBadge}
                                visible={item.count[i] > 0 ? true : false}
                            >
                                {item.count[i]}
                            </Badge>
                            <Text
                                style={[
                                    styles.sizeLabel,
                                    size === i && styles.sizeLabelActive
                                ]}
                            >
                                {i}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.colRight}>
                <TouchableOpacity
                    style={styles.sizeBtn}
                    onPress={() => {
                        if (item.count[size] - 1 >= 0)
                            onSub(
                                {
                                    ...item,
                                    productSize: size,
                                    count: item.count[size] || 0
                                },
                                size
                            );
                    }}
                >
                    <Text style={styles.counterText}>-</Text>
                </TouchableOpacity>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{item.count.count}</Text>
                </View>
                <TouchableOpacity
                    style={styles.sizeBtn}
                    onPress={() =>
                        onAdd(
                            {
                                ...item,
                                productSize: size,
                                count: item.count[size] || 0
                            },
                            size
                        )
                    }
                >
                    <Text style={styles.counterText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
