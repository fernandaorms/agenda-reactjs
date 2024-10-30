import React from 'react';
import { Overlay, Spinner } from './styled';

const Loader = ({isLoading}) => {
    if (!isLoading) return <></>;

    return (
        <Overlay>
            <Spinner />
        </Overlay>
    );
};

export default Loader;