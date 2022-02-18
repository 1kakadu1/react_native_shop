import { ICartItem } from '../components/cart/state/cart.state.model';
import { ICounter } from '../components/post-screen/post-screen.model';
import { IPostItem } from '../components/post-screen/state/post-screen.state.model';

export type price = { [key: string]: number } | number;

export const getPrice = (
    price: price,
    filtersSize: string[],
    size: string = ''
) => {
    if (typeof price === 'number') {
        return price;
    }

    const findSizeIndex = filtersSize.findIndex((x) => x === size);
    const index =
        findSizeIndex !== -1 ? filtersSize[findSizeIndex] : filtersSize[0];

    return price[index];
};

export const getProdCounter = (
    post: IPostItem | undefined,
    cart: ICartItem[],
    id: string
) => {
    let counter: ICounter = {
        count: 0
    };
    if (post) {
        const size = post?.filters.size;
        for (let i = 0; i < size.length; i++) {
            counter[size[i]] =
                cart.find((x) => x.productSize === size[i] && x.id === id)
                    ?.count || 0;
            counter.count += counter[size[i]];
        }
    }
    return counter;
};
type isFullCount = 'fullCount' | 'cartCount' | 'productCount';

interface IGetCounterCounter {
    product: number;
    cart: number;
}

export const getCounterCounter = (
    cart: ICartItem[],
    count: isFullCount = 'productCount'
): number | IGetCounterCounter => {
    let counter: number | IGetCounterCounter = 0;
    const cartLen = cart.length;

    switch (count) {
        case 'productCount':
            for (let i = 0; i < cartLen; i++) {
                counter += cart[i].count;
            }
            break;
        case 'cartCount':
            counter = cartLen;
            break;
        case 'fullCount':
            counter = {
                product: 0,
                cart: cartLen
            };

            for (let i = 0; i < cartLen; i++) {
                counter.product += cart[i].count + counter.product;
            }
            break;
    }

    return counter;
};

export const getTotalPrice = (cart: ICartItem[]): number => {
    let totalPrice = 0;

    cart.forEach((item) => {
        if (typeof item.price === 'number') {
            totalPrice += item.price * item.count;
        } else {
            totalPrice += item.price[item.productSize] * item.count;
        }
    });

    return totalPrice;
};
