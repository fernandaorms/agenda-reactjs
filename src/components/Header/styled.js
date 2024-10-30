import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as colors from '../../styles/colors';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    border-bottom: 1px solid #cdcdcd;
    margin-bottom: 40px;

    .left {
        display: flex;
        align-items: center;
        gap: 0 24px;
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0 8px;

    font-size: 18px;
    font-weight: 600;
    color: ${colors.high_contrast_color};
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 0 8px;

    a {
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

    a:hover {
        color: ${colors.primary_color};
    }
`;

export const Profile = styled.div`
    border: 2px solid ${colors.border_color};
    border-radius: 50%;
    transition: .3s ease;

    a {
        display: flex;
        align-items: center;
        gap: 0 8px;
    }

    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        overflow: hidden;
        color: #D9D9D9;
    }

    .icon {
        font-size: 40px;
    }

    &:hover{
        border-color: ${colors.primary_color};
    }
`;