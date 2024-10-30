import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as colors from '../../styles/colors';

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.75);
    z-index: 1;
`

export const PopUp = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 40px 16px;
`

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    /* margin-top: 24px; */

    @media screen and (max-width:767px) {
        grid-template-columns: 1fr;
    }
`

export const Container = styled.div`
    margin: auto;
    gap: 24px 0;
    height: fit-content;
    max-height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    
    max-width: 768px;
    background: #FFF;
    padding: 40px;
    border-radius: 12px;
    border: 1px solid ${colors.border_color};

    font-family: var(--heading-font-family);
    font-size: 20px;
    color: ${colors.high_contrast_color};

    .scroll {
        overflow-y: scroll;
    }

    @media screen and (max-width:767px) {
        padding: 24px;
    }
`

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;

    @media screen and (max-width: 1199px) {
        & {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media screen and (max-width: 991px) {
        & {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 767px) {
        & {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

export const Photo = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid ${colors.border_color};
    cursor: pointer;
    transition: .3s ease;

    img {
        height: 100%;
        width: 100%;
    }

    .empty {
        color: ${colors.border_color};
        transition: .3s ease;
        font-size: 24px;
    }

    &.selected {
        border-width: 4px;
        border-color: ${colors.primary_color};

        .empty{
            color: ${colors.primary_color};
        }
    }

    &:hover {
        border-color: ${colors.primary_color};

        .empty{
            color: ${colors.primary_color};
        }
    }
`;

export const LinkButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
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

export const NoPhotos = styled.div`
    font-size: 16px;
    font-family: var(--default-font-family);
    color: ${colors.md_contrast_color};

    span {
        display: block;
    }
`;