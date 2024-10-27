import styled from 'styled-components';

import * as colors from './colors'; 

export const PrimaryButton = styled.button`
    height: 48px;
    width: 100%;
    transition: .3s ease;
    border-radius: 80px;
    border: none;
    background: ${colors.primary_color};
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        filter: brightness(0.85);
    }
`