import React from 'react';
import PropTypes from 'prop-types';
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