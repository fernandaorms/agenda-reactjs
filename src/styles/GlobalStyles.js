import { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

import 'react-toastify/ReactToastify.css';

export default createGlobalStyle`
    :root {
        --background-color: #f5f5f5;

        --primary-color: ${colors.primary_color};    /* Azul */
        --secondary-color: ${colors.secondary_color};  /* Cinza */

        --success-color: ${colors.success_color};    /* Verde */
        --danger-color: ${colors.danger_color};     /* Vermelho */
        --warning-color: ${colors.warning_color};     /* Amarelo */
        --info-color: ${colors.info_color};        /* Ciano */

        --light-color: ${colors.light_color};       /* Claro */
        --dark-color: ${colors.dark_color};        /* Escuro */

        --default-font-family: 'Inter', sans-serif;
        --heading-font-family: 'Sora', sans-serif;
    }

    html {
        position: relative;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: var(--default-font-family);
        font-size: 16px;
        line-height: 150%;
        color: ${colors.md_contrast_color};
        background-color: var(--background-color);
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
        font-size: 0;
        transition: .3s;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: var(--heading-font-family);
        font-weight: 600;
        color: ${colors.high_contrast_color};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0 0 16px;
    }

    h1:last-child,
    h2:last-child,
    h3:last-child,
    h4:last-child,
    h5:last-child,
    h6:last-child,
    p:last-child {
        margin-bottom: 0;
    }

    h1 {
        font-size: 2em;
    }

    h2 {
        font-size: 1.75em;
    }

    h3 {
        font-size: 1em;
        line-height: 125%;
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: .3s;
        position: relative;
    }

    p a,
        .content-block li a,
        .dynamic-content a {
        color: var(--primary_color);
        font-weight: 600;
    }

    iframe {
        display: block;
    }

    ul,
    ol {
        padding-left: 0;
        list-style: none;
        margin: 0;
    }

    input,
    textarea,
    select {
        font-family: inherit;
        color: inherit;
        font-size: 1em;
        transition: .3s;
        margin: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }

    *:focus {
        outline: none;
    }

    *::placeholder {
        color: inherit;
        opacity: .5;
    }

    .button {
        transition: .3s;
    }


    /*  */
    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 576px) {
        .container {
            max-width: 540px;
        }
    }

    @media (min-width: 768px) {
        .container {
            max-width: 720px;
        }
    }

    @media (min-width: 992px) {
        .container {
            max-width: 960px;
        }
    }

    @media (min-width: 1200px) {
        .container {
            max-width: 1140px;
        }
    }


    /*  */
    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }


    /*  */
    .col,
    .col-1,
    .col-10,
    .col-11,
    .col-12,
    .col-2,
    .col-3,
    .col-4,
    .col-5,
    .col-6,
    .col-7,
    .col-8,
    .col-9,
    .col-auto,
    .col-lg,
    .col-lg-1,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-auto,
    .col-md,
    .col-md-1,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-auto,
    .col-sm,
    .col-sm-1,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-auto,
    .col-xl,
    .col-xl-1,
    .col-xl-10,
    .col-xl-11,
    .col-xl-12,
    .col-xl-2,
    .col-xl-3,
    .col-xl-4,
    .col-xl-5,
    .col-xl-6,
    .col-xl-7,
    .col-xl-8,
    .col-xl-9,
    .col-xl-auto {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
`;