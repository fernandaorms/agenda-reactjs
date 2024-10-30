import styled from 'styled-components';

import * as colors from './colors'; 

export const FormContainer = styled.div`
    padding: 40px 32px;
    border-radius: 12px;
    border: 1px solid ${colors.border_color};
    background: #FFF;
    max-width: 596px;
    margin: 0 auto;
`;

export const Form = styled.form`
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
        gap: 16px;
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

    .error {
        display: block;
        font-size: 12px;
        font-weight: 500;
        color: ${colors.danger_color};
        line-height: 135%;
        margin-top: 8px;
    }

    @media screen and (max-width: 595px) {
        .field-group {
            grid-template-columns: 1fr;
        }
    }
`;