import React from 'react';
import { useSelector } from 'react-redux';
import { Share } from './share.component';
import { toShareSelector } from '../state/share.selector';

export const ShareContainer = () => {
    const title = useSelector(toShareSelector.title);
    const uri = useSelector(toShareSelector.uri);
    const message = useSelector(toShareSelector.message);

    return <Share title={title} uri={uri} message={message} />;
};
