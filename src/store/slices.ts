import { userSlice } from './user/user.reducer';
import { headerSlice } from '../components/header/state/header.reducer';
import { settingSlice } from '../components/setting/state/setting.reducer';
import { productsSlice } from '../components/products/state/products.state.reducer';
import { cartSlice } from '../components/cart/state/cart.state.reducer';
import { postSlice } from '../components/post-screen/state/post-screen.state.reducer';
import { cartPanelSlice } from '../components/cart-panel/state/cart-panel.state.reducer';
import { productsPanelSlice } from '../components/products-panel/state/products-panel.reducer';
import { SearchModule } from '../components/search/search.module';
import { catSlice } from '../components/cat/state/cat.state.reducer';
import { ShareModule } from '../components/share/share.module';
import { ProfileModule } from '../components/profile/profile.module';
import { HistoryModule } from '../components/history/history.module';

export const slices = {
    [userSlice.name]: userSlice.reducer,
    [headerSlice.name]: headerSlice.reducer,
    [settingSlice.name]: settingSlice.reducer,
    [productsSlice.name]: productsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [postSlice.name]: postSlice.reducer,
    [cartPanelSlice.name]: cartPanelSlice.reducer,
    [productsPanelSlice.name]: productsPanelSlice.reducer,
    [catSlice.name]: catSlice.reducer,
    ...SearchModule.reducer,
    ...ShareModule.reducer,
    ...ProfileModule.reducer,
    ...HistoryModule.reducer
};

export const sliceKeys = [
    userSlice.name, //0
    headerSlice.name, //1
    settingSlice.name, //2
    productsSlice.name, //3
    cartSlice.name, //4
    postSlice.name, //5
    cartPanelSlice.name, //6
    SearchModule.name, //7
    productsPanelSlice.name, //8
    catSlice.name, //9
    ProfileModule.name // 10
];
