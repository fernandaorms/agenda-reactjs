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

    .files-list {
        .files {
            font-weight: 600;
            margin-bottom: 8px;
        }

        .list {
            display: flex;
            flex-wrap: wrap;
            gap: 4px 12px;

            span {
                display: block;
                white-space: nowrap;
            }
        }
    }
`

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 32px 0;

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 12px;
        margin: 24px 0;
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

export const Form = styled.form`
    .field {
        position: relative;
    }

    input {
        display: none;
    }

    .errors {
        margin-bottom: 16px;
    }

    .error {
        display: block;
        font-size: 14px;
        font-weight: 500;
        color: ${colors.danger_color};
        line-height: 135%;
        margin-bottom: 8px;
    }
`

export const LoadPhoto = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    border: 2px solid ${colors.border_color};
    font-size: 24px;
    color: ${colors.border_color};
    transition: .3s ease;
    cursor: pointer;

    &:hover {
        border-color: ${colors.primary_color};
        color: ${colors.primary_color};
    }

    span{
        font-size: 18px;
        font-weight: 500;
    }

    @media screen and (max-width: 575px) {
        border-color: ${colors.primary_color};
        color: ${colors.primary_color};

        span{
            font-size: 16px;
            line-height: 125%;
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

    .delete {
        position: absolute;
        color: ${colors.danger_color};
        transition: .3s ease;
    }

    &:hover {
        border-color: ${colors.danger_color};
    }

    @media screen and (min-width: 768px){
        .delete {
            top: calc(50% - 12px);
            left: calc(50% - 12px);
            font-size: 28px;
            opacity: 0;
            visibility: hidden;
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(255, 255, 255, 0);
            transition: .3s ease;
        }

        &:hover {
            .delete {
                opacity: 1;
                visibility: visible;
            }

            &::before{
                background-color: rgba(255, 255, 255, 0.85);
            }
        }
    }

    @media screen and (max-width: 767px) {
        .delete {
            font-size: 18px;
            bottom: 12px;
            color: #FFF;
            left: calc(50% - 9px);
        }

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: calc(50% - 20px);
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background: ${colors.danger_color};
            transition: .3s ease;
        }
    }
`;