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
        background: ${colors.primary_color_dark};
    }
`

export const DangerButtonLight = styled.button`
    height: 48px;
    width: 100%;
    transition: .3s ease;
    border-radius: 80px;
    border: none;
    background: #FFF;
    color: ${colors.danger_color};
    border: 1px solid ${colors.danger_color};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background: #FFD5D5;
        border-color: transparent;
    }
`