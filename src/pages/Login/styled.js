import styled from 'styled-components';

import * as colors from '../../styles/colors'; 

export const Title = styled.div`
    text-align: center;
    margin-bottom: 32px;

    :is(h1, h2, h1, h4, h5) {
        font-size: 28px;
    }
`;

export const Alternative = styled.div`
    margin-top: 32px;
    p {
        font-size: 14px;
        text-align: center;
    }

    a {
        color: ${colors.primary_color};

        &:hover {
            text-decoration: underline;
        }
    }
`;
