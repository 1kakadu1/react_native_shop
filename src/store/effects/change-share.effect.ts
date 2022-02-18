import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { PayloadAction } from '@reduxjs/toolkit';
import { map } from 'rxjs/operators';
import { toPostAction } from '../../components/post-screen/state/post-screen.state.reducer';
import { toShareAction } from '../../components/share/state/share.reducer';
import { ISharePayload } from '../../components/share/state/share.model';
import { IPostItem } from '../../components/post-screen/state/post-screen.state.model';

export const setShareInfoEffect = (
    action$: ActionsObservable<PayloadAction<IPostItem>>
): Observable<PayloadAction<ISharePayload>> =>
    action$.pipe(
        ofType(toPostAction.postRequestSuccess.type),
        map((action: PayloadAction<IPostItem>) => {
            return toShareAction.setShare({
                uri: action.payload.preview,
                title: action.payload.title,
                message: action.payload.desc
            });
        })
    );
