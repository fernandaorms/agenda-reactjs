import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Title = styled.div`
    text-align: center;
    margin-bottom: 32px;

    :is(h1, h2, h1, h4, h5) {
        font-size: 28px;
    }
`;

export const ProfilePicture = styled.div`
    position: relative;
    margin: 0 auto 24px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    color: #D9D9D9;
    cursor: pointer;
    border: 2px solid ${colors.border_color};
    
    .picture {
        height: 100%;
        width: 100%;
    }

    
    /* display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    
    cursor: pointer;
    transition: .3s ease; */

    .edit {
        position: absolute;
        color: ${colors.primary_color};
        transition: .3s ease;
    }

    &:hover {
        border-color: ${colors.primary_color};
    }

    @media screen and (min-width: 768px){
        .edit {
            top: calc(50% - 10px);
            left: calc(50% - 10px);
            font-size: 20px;
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
            .edit {
                opacity: 1;
                visibility: visible;
            }

            &::before{
                background-color: rgba(255, 255, 255, 0.85);
            }
        }
    }

    @media screen and (max-width: 767px) {
        .edit {
            font-size: 16px;
            bottom: 12px;
            color: #FFF;
            left: calc(50% - 6px);
        }

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: calc(50% - 20px);
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background: ${colors.primary_color};
            transition: .3s ease;
        }
    }
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 24px;

    @media screen and (max-width:767px) {
        grid-template-columns: 1fr;
    }
`;