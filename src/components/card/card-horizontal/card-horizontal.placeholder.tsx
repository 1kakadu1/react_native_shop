import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { stylesCardHorizontal } from './card-horizontal.styles';
import { dataCount, getWidth } from '../../../helpers/functions';
import { gray } from '../../../consts/colors.const';
import { ICardHorizontalPlaceholder } from './card-horizontal.model';
import { sizeOffset } from '../../../consts/size';

export const RenderItem = () => {
    const styles = stylesCardHorizontal;

    return (
        <View style={[{ height: 124 }, styles.itemPlaceholder]}>
            <SkeletonPlaceholder
                speed={1700}
                backgroundColor={gray[100]}
                highlightColor={gray[50]}
            >
                <View style={styles.itemPlaceholderWrap}>
                    <View style={{ ...styles.preview }}></View>
                    <View style={{ flexDirection: 'column', marginTop: 10 }}>
                        <View
                            style={{
                                marginLeft: 10,
                                marginBottom: 6,
                                marginTop: 6
                            }}
                        >
                            <SkeletonPlaceholder.Item
                                width={180 * sizeOffset()}
                                height={20}
                                borderRadius={4}
                            />
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                                marginBottom: 6,
                                marginTop: 6
                            }}
                        >
                            <SkeletonPlaceholder.Item
                                width={180 * sizeOffset()}
                                height={20}
                                borderRadius={4}
                            />
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                                marginBottom: 6,
                                marginTop: 6
                            }}
                        >
                            <SkeletonPlaceholder.Item
                                width={180 * sizeOffset()}
                                height={20}
                                borderRadius={4}
                            />
                        </View>
                    </View>
                    <View style={{ marginLeft: 14, marginTop: 42 }}>
                        <SkeletonPlaceholder.Item
                            width={30}
                            height={30}
                            borderRadius={30}
                        />
                    </View>
                </View>
            </SkeletonPlaceholder>
        </View>
    );
};

export const CardHorizontalPlaceholder = ({
    count
}: ICardHorizontalPlaceholder) => {
    const items = dataCount(count).map((item: string) => (
        <RenderItem key={item}></RenderItem>
    ));
    return <>{items}</>;
};
