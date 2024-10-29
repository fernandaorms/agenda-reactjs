import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Container = styled.div`
    padding: 40px 32px;
    border-radius: 12px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    max-width: 596px;
    margin: 0 auto;
`
 
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    span {
        color: ${colors.high_contrast_color};
        font-family: var(--heading-font-family);
    }

    .name {
        font-size: 20px;
        font-weight: 600;
        margin-top: 16px;
    }

    .email {
        font-size: 16px;
        font-weight: 500;
        margin-top: 4px;
    }
`
 
export const Menu = styled.div`
    margin: 32px 0;

    a {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 0 16px;
        align-items: center;
        height: 56px;
        color: ${colors.high_contrast_color};
        font-family: var(--heading-font-family);
        font-weight: 500;

        ~ a {
            border-top: 1px solid ${colors.border_color};
        }

        &:hover {
            color: ${colors.primary_color};
        }
    }

`

export const ProfilePicture = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 94px;
    width: 94px;
    border-radius: 50%;
    overflow: hidden;
    color: #D9D9D9;
    
    > * {
        height: 100%;
        width: 100%;
    }
`