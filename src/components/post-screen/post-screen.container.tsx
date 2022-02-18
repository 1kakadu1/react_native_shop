import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SCREENS_STACK, SCREENS } from '../../consts/screens';
import { getProdCounter } from '../../helpers/cart';
import { screenRoute } from '../../router/router.model';
import { toCartSelector } from '../cart/state/cart.state.selector';
import { toProducts } from '../products/state/products.state.selector';
import { PostItem } from './post-screen.component';
import { toPostAction } from './state/post-screen.state.reducer';
import { toPostSelector } from './state/post-screen.state.selector';

export const PostItemContainer = () => {
    const route = useRoute<RouteProp<screenRoute, 'PostItemScreen'>>(); //TODO: Try to pass constants
    const nav = useNavigation();
    const dispatch = useDispatch();

    const post = useSelector(toPostSelector.post);
    const size = useSelector(toPostSelector.size);
    const postPlaceholder = useSelector(toProducts.getProduct(route.params.id));
    const isLoad = useSelector(toPostSelector.isLoad);
    const isRefresh = useSelector(toPostSelector.isRefresh);
    const cartProductsItem =
        useSelector(toCartSelector.getCartProduct(route.params.id)) || 0;
    const posts = useSelector(toProducts.productsList);
    const onRefresh = () => {
        dispatch(toPostAction.clearProduct());
        dispatch(toPostAction.postRefreshRequest());
    };

    useEffect(() => {
        dispatch(toPostAction.clearProduct());
        dispatch(
            toPostAction.postRequest({
                id: route.params.id,
                size: post?.filters?.size[0] || route.params.size || ''
            })
        );
    }, [route.params]);

    return post ? (
        <PostItem
            sliderData={posts}
            isLoad={isLoad}
            isRefresh={isRefresh}
            onRefresh={onRefresh}
            post={post}
            size={size}
            count={getProdCounter(post, cartProductsItem, route.params.id)}
            nav={(id: string) =>
                nav.navigate(SCREENS_STACK.modal, {
                    screen: SCREENS.postItem,
                    params: { id }
                })
            }
        />
    ) : postPlaceholder ? (
        <PostItem
            sliderData={posts}
            isLoad={true}
            isRefresh={isRefresh}
            onRefresh={onRefresh}
            post={postPlaceholder}
            count={{ count: 0 }}
            size={size}
            nav={(id: string) =>
                nav.navigate(SCREENS_STACK.modal, {
                    screen: SCREENS.postItem,
                    params: { id }
                })
            }
        />
    ) : (
        <View>
            <Text>Loading...</Text>
        </View>
    );
};
