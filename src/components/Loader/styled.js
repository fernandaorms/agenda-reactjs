import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.75);
    display: flex;
    z-index: 1;
`

export const Spinner = styled.div`
    margin: auto;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 8px solid;
    border-color: ${colors.border_color_light};
    border-right-color: ${colors.primary_color};
    animation: spinner-d3wgkg 1s infinite linear;

    @keyframes spinner-d3wgkg {
        to {
            transform: rotate(1turn);
        }
    }
`