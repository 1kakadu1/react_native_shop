import React from 'react';
import { View, Image, ScrollView, RefreshControl } from 'react-native';
import { Snackbar, Text } from 'react-native-paper';
import { IPostItemProps } from './post-screen.model';
import { stylesPostItem } from './post-screen.styles';
import { useTranslation } from 'react-i18next';
import Slick from 'react-native-slick';
import { createDataSlide } from '../../helpers/functions';
import { CardVerical } from '../card/card-vertical/card-verical.component';
import TextTicker from 'react-native-text-ticker';
import { CartPanelContainer } from '../cart-panel/cart-panel.container';
import { getPrice } from '../../helpers/cart';
import GallerySwiper from 'react-native-gallery-swiper';

export const PostItem = ({
    post,
    count,
    size,
    isLoad,
    isRefresh,
    onRefresh,
    sliderData,
    nav
}: IPostItemProps) => {
    const styles = stylesPostItem;
    const [t] = useTranslation();
    const dataSlider = createDataSlide(sliderData, 4);
    const price = getPrice(post.price, post.filters.size, size);
    const ref = React.useRef<ScrollView>(null);
    const gallary = post.gallary
        ? (post.gallary as string[]).map((item) => ({ uri: item }))
        : undefined;

    React.useEffect(() => {
        ref && ref.current && ref.current.scrollTo({ y: 0 });
    }, [post.id]);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={ref}
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefresh}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={styles.section1}>
                    {post.isTop === true ? (
                        <View style={styles.badgeWrap}>
                            <View style={styles.badgbe}>
                                <Image
                                    style={styles.badgeImg}
                                    source={require('./resources/bookmark.png')}
                                />
                                <Text style={styles.badgeText}>Top</Text>
                            </View>
                        </View>
                    ) : null}
                    {post.preview && post.preview !== '' ? (
                        <Image
                            style={styles.preview}
                            source={{ uri: post.preview }}
                        />
                    ) : (
                        <Image
                            style={styles.preview}
                            source={require('./resources/no-image.jpg')}
                        />
                    )}
                </View>

                <View style={styles.titleWrap}>
                    <View style={styles.titleLeft}>
                        <View style={styles.catList}>
                            {post.cat.map((item: string) => (
                                <View style={styles.catItem} key={item}>
                                    <Text style={styles.catText}>
                                        {item.toUpperCase()}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <TextTicker
                            style={styles.text}
                            loop
                            scrollSpeed={4000}
                            repeatSpacer={50}
                            marqueeDelay={2000}
                        >
                            {post.title}
                        </TextTicker>
                    </View>
                    <View style={styles.titleRight}>
                        <View style={styles.priceWrap}>
                            <Text style={styles.price}>{price} $</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.desc}>
                    <Text style={styles.descText}>{post.desc}</Text>
                </View>

                <View>
                    <Text style={styles.h1}>Это часто берут:</Text>
                </View>

                {/* {   gallary &&
                        <GallerySwiper
                            images={[...gallary]}
                        />
                } */}

                <Slick
                    style={styles.wrapper}
                    showsButtons={false}
                    autoplay={true}
                    loop={true}
                    activeDotStyle={styles.activeDot}
                    autoplayTimeout={10}
                >
                    {dataSlider.map((item) => {
                        return (
                            <View key={item[0].id} style={styles.slide}>
                                <CardVerical
                                    nav={nav}
                                    data={item[0]}
                                    width={'50%'}
                                    height={270}
                                />
                                {item[1] && (
                                    <CardVerical
                                        nav={nav}
                                        data={item[1]}
                                        width={'50%'}
                                        height={270}
                                    />
                                )}
                            </View>
                        );
                    })}
                </Slick>
            </ScrollView>

            {!isLoad && (
                <CartPanelContainer
                    item={{
                        id: post.id,
                        preview: post.preview,
                        count,
                        title: post.title,
                        price: post.price,
                        filters: post.filters,
                        cat: post.cat[0]
                    }}
                />
            )}

            <Snackbar
                style={styles.snackbar}
                visible={isLoad}
                onDismiss={() => false}
                action={{
                    label: '',
                    onPress: () => true
                }}
            >
                {t('page.post.load-data')}...
            </Snackbar>
        </View>
    );
};
