import styled from 'styled-components';

import * as colors from '../../styles/colors'; 

export const Intro = styled.div`
    text-align: center;
    margin-bottom: 32px;

    .title {
        font-size: 28px;
    }

    p {
        font-size: 14px;
    }

    a {
        color: ${colors.primary_color};

        &:hover {
            text-decoration: underline;
        }
    }
`;
