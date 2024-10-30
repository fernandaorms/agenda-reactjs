import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Container = styled.div`
    padding: 40px 32px;
    border-radius: 12px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    max-width: 596px;
    margin: 0 auto;

    .title {
        :is(h1, h2, h1, h4, h5) {
            font-size: 28px;
            text-align: center;
        }

        margin-bottom: 40px;
    }
`

export const Users = styled.div`
    display: grid;
    gap: 24px 0;

    >div+div {
        padding-top: 24px;
        border-top: 1px solid ${colors.border_color};
    }
`

export const User = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 40px 1fr 1fr 32px 32px;
    gap: 0 12px;

    span {
        color: ${colors.high_contrast_color};
        font-weight: 500;
    }

    .edit {
        color: ${colors.primary_color};
    }

    .delete {
        color: ${colors.danger_color};
    }

    .icon {
        display: block;
        margin: 0 auto;
        font-size: 16px;
        cursor: pointer;
    }

    >div {
        display: flex;
        align-items: center;
    }
`

export const ProfilePicture = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
    color: #D9D9D9;
    
    > * {
        height: 100%;
        width: 100%;
    }
`

export const Empty = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${colors.high_contrast_color};
    text-align: center;
`