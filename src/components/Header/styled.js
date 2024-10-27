import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    border-bottom: 1px solid #cdcdcd;
    margin-bottom: 40px;

    .logo {
        display: flex;
        align-items: center;
        gap: 0 8px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 0 16px;

    .button {
        display: flex;
        align-items: center;
        gap: 0 8px;
        height: 40px;
        width: auto;
        padding: 0 24px;
        border-radius: 8px;

        &.sign-in {
            border: 1px solid ${colors.primary_color};
            color: ${colors.primary_color};
        }

        &.sign-up {
            background: ${colors.primary_color};
            color: #FFF;
        }
    }
`;


export const Menu = styled.ul`
    display: flex;
    align-items: center;
    gap: 0 32px;
`