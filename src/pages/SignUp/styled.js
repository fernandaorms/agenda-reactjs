import styled from 'styled-components';

import * as colors from '../../styles/colors'; 

export const Title = styled.div`
    text-align: center;
`;

export const Form = styled.form`
    padding: 32px;
    border-radius: 12px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    max-width: 596px;
    margin: 0 auto;

    .line {
        display: grid;
        width: 100%;

        ~ .line {
            margin-top: 16px;
        }
    }

    .field-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 16px;
    }

    label {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
    }

    input {
        display: block;
        height: 48px;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #D9D9D9;
        padding: 0 12px;
        font-size: 14px;

        &:focus {
            border-color: ${colors.primary_color};
        }
    }

    .button {
        margin-top: 24px;
    }

    button {
        height: 40px;
        width: 100%;
        transition: .3s ease;
        border-radius: 4px;
        border: none;
        background: ${colors.primary_color};
        color: #FFF;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            filter: brightness(0.95);
        }
    }

    .error {
        display: block;
        font-size: 12px;
        font-weight: 500;
        color: ${colors.danger_color};
        line-height: 135%;
        margin-top: 8px;
    }
`;