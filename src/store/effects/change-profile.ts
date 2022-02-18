import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { PayloadAction } from '@reduxjs/toolkit';
import { map } from 'rxjs/operators';
import { toUserAction } from '../user/user.reducer';
import { IUser } from '../user/user.model';
import {
    IProfile,
    IProfileUser
} from '../../components/profile/state/profile.state.model';
import { toProfileAction } from '../../components/profile/state/profile.state.reducer';

export const setProfileEffect = (
    action$: ActionsObservable<PayloadAction<IUser>>
): Observable<PayloadAction<IProfileUser>> =>
    action$.pipe(
        ofType(
            toUserAction.loginActionRequestSuccess.type,
            toUserAction.getUserActionRequestSuccess.type
        ),
        map((action: PayloadAction<IUser>) => {
            return toProfileAction.setProfile({
                email: action.payload.email,
                phone: action.payload.phone as string,
                preview: (action.payload.preview as string) || '',
                name: action.payload.name,
                userID: action.payload.userID || '',
                address: action.payload.address as string
            });
        })
    );

export const outProfileEffect = (
    action$: ActionsObservable<PayloadAction>
): Observable<PayloadAction> =>
    action$.pipe(
        ofType(toUserAction.logoutRequestSuccess.type),
        map(() => {
            return toProfileAction.outProfile();
        })
    );
