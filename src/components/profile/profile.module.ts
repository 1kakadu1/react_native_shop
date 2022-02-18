import { ProfileContainer } from './components/profile.container';
import { PROFILE_KEY } from './state/profile.state.const';
import { profileSlice } from './state/profile.state.reducer';

export const ProfileModule = {
    component: ProfileContainer,
    reducer: {
        [PROFILE_KEY]: profileSlice.reducer
    },
    name: PROFILE_KEY
};
