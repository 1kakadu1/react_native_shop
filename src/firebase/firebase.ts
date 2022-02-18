import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import 'firebase/firestore';
//import 'firebase/analytics';
import firebaseConfig from './config';

let dbh: any = null;
const fbDefault = firebase.default;

if (!fbDefault.apps.length) {
    console.log('init');
    fbDefault.initializeApp(firebaseConfig);
    dbh = fbDefault.firestore();
}

export const fb = {
    firebase: fbDefault,
    store: fbDefault.storage,
    dbh,
    analytics: fbDefault.analytics
};
