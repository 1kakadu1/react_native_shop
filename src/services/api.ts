import { from, Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ICartItem } from '../components/cart/state/cart.state.model';
import { ICatList } from '../components/cat/state/cat.state.model';
import { IHistoryProducts } from '../components/history/state/history.state.model';
import { IOrderForm } from '../components/order/order.model';
import { IProducts } from '../components/products/state/products.state.model';
import { fb } from '../firebase/firebase';
import { timeConverterUNIX } from '../helpers/functions';
import {
    IUser,
    IUserActionProps,
    IUserCreateActionProps
} from '../store/user/user.model';

export interface IResponse<TMeta, TError, TData> {
    meta?: TMeta;
    error?: TError;
    data?: TData;
}

export const userSingOut = (): Observable<IResponse<{}, string, any>> => {
    return from(fb.firebase.auth().signOut()).pipe(
        switchMap(() => of({ error: '', data: null })),
        catchError((e) => of({ error: e }))
    );
};
export const userSingIn = ({
    email,
    password
}: IUserActionProps): Observable<IResponse<{}, string, IUser | {}>> => {
    return from(
        fb.firebase.auth().signInWithEmailAndPassword(email, password)
    ).pipe(
        switchMap((res) => getUser(res.user?.uid)),
        catchError((e) => of({ error: e }))
    );
};

export const userSingInRemember = ({
    email,
    password
}: IUserActionProps): Observable<IResponse<{}, string, {}>> => {
    return from(
        fb.firebase
            .auth()
            .setPersistence(fb.firebase.auth.Auth.Persistence.LOCAL)
    ).pipe(
        switchMap(() => userSingIn({ email, password })),
        catchError((e) => of({ error: e }))
    );
};

export const userCreateWithEmailAndPassword = ({
    email,
    password,
    data
}: IUserCreateActionProps): Observable<
    IResponse<{}, string, { newUser: boolean }>
> => {
    return from(
        fb.firebase.auth().createUserWithEmailAndPassword(email, password)
    ).pipe(
        switchMap((res) => {
            return from(
                fb.dbh.collection('users').add({
                    name: data.name,
                    address: data.address,
                    preview: '',
                    orders: [],
                    phone: data.phone,
                    userID: res.user?.uid
                })
            ).pipe(
                switchMap((res) => {
                    return of({ data: { newUser: true } });
                }),
                catchError((e) => {
                    return of({ error: e });
                })
            );
        }),
        catchError((e) => of({ error: e }))
    );
};

export const getUser = (
    userID?: string
): Observable<IResponse<{}, string, IUser>> => {
    return from(
        fb.dbh.collection('users').where('userID', '==', userID).get()
    ).pipe(
        switchMap((res: any) => {
            let data: any = {};
            let i = 0,
                BreakException = {};

            try {
                res.forEach(function (doc: any) {
                    data = doc.data();
                    if (i === 0) throw BreakException;
                });
            } catch (e) {
                if (e !== BreakException) throw e;
            }
            return of({ data });
        }),
        catchError((e) => of({ error: e }))
    );
};
export const updateFieldFirebaseProfileUser = () => {
    //const user = fb.firebase.auth().currentUser;
};

export const resetPassworProfileUser = (
    email: string
): Observable<IResponse<{}, string, IUser>> => {
    return from(fb.firebase.auth().sendPasswordResetEmail(email)).pipe(
        switchMap((res: any) => {
            return of({ data: res });
        }),
        catchError((e) => of({ error: e }))
    );
};

export const updateFieldUser = (
    userID: string,
    field: string,
    data: string | []
): Observable<IResponse<{}, string, IUser>> => {
    return from(
        fb.dbh.collection('users').where('userID', '==', userID).get()
    ).pipe(
        switchMap((res: any) => {
            let id: string = '';
            let i = 0,
                BreakException = {};
            try {
                res.forEach(function (doc: { id: string }) {
                    id = doc.id;
                    if (i === 0) throw BreakException;
                });
            } catch (e) {
                if (e !== BreakException) throw e;
            }

            return from(
                fb.dbh
                    .collection('users')
                    .doc(id)
                    .update({
                        [field]: data
                    })
            ).pipe(
                switchMap((res: any) => {
                    return of({ data: res });
                }),
                catchError((e) => of({ error: e }))
            );
        }),
        catchError((e) => of({ error: e }))
    );
};

export const getProductsById = (
    id: string
): Observable<IResponse<{}, string, IProducts>> => {
    return from(fb.dbh.collection('products').doc(id).get()).pipe(
        switchMap((res: any) => {
            return of({ data: { ...res.data(), id } });
        }),
        catchError((e) => of({ error: e }))
    );
};

export const getCatList = (): Observable<IResponse<{}, string, ICatList[]>> => {
    return from(fb.dbh.collection('cat').get()).pipe(
        switchMap((res: any) => {
            let data: ICatList[] = [];

            res.forEach(function (doc: any) {
                data.push({ ...doc.data(), id: doc.id });
            });
            return of({ data: data });
        }),
        catchError((e) => {
            return of({ error: e });
        })
    );
};

export const getProducts = (
    currentCat: string,
    limit: number = 10,
    offset: number = 0
): Observable<IResponse<{}, string, IProducts[]>> => {
    return from(
        fb.dbh
            .collection('products')
            .where('cat', 'array-contains', currentCat)
            //.orderBy("status")
            .limit(limit)
            .get()
    ).pipe(
        switchMap((res: any) => {
            let data: IProducts[] = [];

            res.forEach(function (doc: any) {
                data.push({ ...doc.data(), id: doc.id });
            });
            return of({ data: data });
        }),
        catchError((e) => {
            return of({ error: e });
        })
    );
};

export const getHistory = (
    userID: string,
    limit: number = 4
): Observable<IResponse<{}, string, IHistoryProducts[]>> => {
    return from(
        fb.dbh
            .collection('orders')
            .where('userID', '==', userID)
            .limit(limit)
            .get()
    ).pipe(
        switchMap((res: any) => {
            let data: IHistoryProducts[] = [];

            res.forEach(function (doc: any) {
                const item = doc.data();
                data.push({
                    products: item.products,
                    date: timeConverterUNIX(item.date).dateTime,
                    id: doc.id
                });
            });
            return of({ data });
        }),
        catchError((e) => {
            return of({ error: e });
        })
    );
};

export const addOrder = (
    orderInfo: IOrderForm,
    products: ICartItem[],
    key: string
): Observable<IResponse<{}, string, string>> => {
    return from(
        fb.dbh.collection('orders').add({
            key,
            name: orderInfo.name,
            email: orderInfo.email,
            date: orderInfo.date,
            comments: orderInfo.comments,
            address: orderInfo.address,
            products,
            userID: orderInfo.userID
        })
    ).pipe(
        switchMap((res: any) => {
            return of({ data: res });
        }),
        catchError((e) => {
            return of({ error: e });
        })
    );
};

export const getSearch = (
    queryText: string
): Observable<IResponse<{}, string, IProducts[]>> => {
    //TODO: firebase not search. This search fake.
    return from(
        fb.dbh
            .collection('products')
            .orderBy('title')
            .startAt(queryText)
            .limit(3)
            .get()
    ).pipe(
        switchMap((res: any) => {
            let data: IProducts[] = [];

            res.forEach(function (doc: any) {
                data.push({ ...doc.data(), id: doc.id });
            });

            return of({ data: data });
        }),
        catchError((e) => {
            return of({ error: e });
        })
    );
};
