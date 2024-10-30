import styled from 'styled-components';
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
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 0 16px;

    > div {
        margin: auto;
        width: 100%;
        max-width: 596px;
        background: #FFF;
        padding: 40px;
        border-radius: 12px;
        border: 1px solid ${colors.border_color};

        font-family: var(--heading-font-family);
        font-size: 20px;
        color: ${colors.high_contrast_color};
    }

    @media screen and (max-width:767px) {
        >div {
            padding: 24px;
        }
    }
`

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 24px;

    @media screen and (max-width:767px) {
        grid-template-columns: 1fr;
    }
`