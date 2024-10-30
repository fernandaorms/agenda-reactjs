import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Container = styled.div`
    padding: 40px 32px;
    border-radius: 12px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    /* max-width: 596px; */
    margin: 0 auto;

    .title {
        :is(h1, h2, h1, h4, h5) {
            font-size: 28px;
            text-align: center;
        }

        margin-bottom: 40px;
    }
`

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;
        border-radius: 8px;
        overflow: hidden;
        border: 2px solid ${colors.border_color};
    }

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


export const LoadPhoto = styled.div`
    
    font-size: 32px;
    color: ${colors.border_color};
    transition: .3s ease;
    cursor: pointer;

    &:hover {
        border-color: ${colors.primary_color};
        color: ${colors.primary_color};
    }
`;


export const Photo = styled.div`
    img {
        height: 100%;
        width: 100%;
    }
`;