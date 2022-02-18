import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { PayloadAction } from '@reduxjs/toolkit';
import { toHeaderAction } from '../../components/header/state/header.reducer';
import { toSettingAction } from '../../components/setting/state/setting.reducer';
import { map } from 'rxjs/operators';

export const changeHeaderSettingOpenEffect = (
    action$: ActionsObservable<PayloadAction>
): Observable<PayloadAction<boolean>> =>
    action$.pipe(
        ofType(toHeaderAction.onOpenSetting.type),
        map(() => {
            return toSettingAction.onToggle(true);
        })
    );

export const changeSettingHeadeCloseEffect = (
    action$: ActionsObservable<PayloadAction>
): Observable<PayloadAction<boolean>> =>
    action$.pipe(
        ofType(toSettingAction.onClose.type),
        map(() => {
            return toHeaderAction.onToggleSetting(false);
        })
    );
