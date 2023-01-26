import { createGlobalStyle } from 'styled-components'
import { breakpoints } from './breakpoints'
import { font } from './font'
import { generateTheme } from './generate-theme'

const GlobalStyles = createGlobalStyle`

    //RESET STYLES
    html {
        scroll-behavior: smooth;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    * {
        box-sizing: border-box;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    button {
        font-family: inherit;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    h1, h2, h3, h4 {
        position: relative;
        z-index: 10;
    }
    a {
        cursor: pointer;
    }
    ::selection {
        background-color: var(--primary-dark);
        color: white;
    }
    //RESET STYLES

    ${font}
    :root{
        --primary-font: "Poppins", "Segoe UI", "Helvetica Neue", helvetica, arial, sans-serif;
        ${generateTheme('light')};
        --header-height: 80px;
        --fadeAnimationDelay: 1600ms;
    }

    html, body {
        font-family: var(--primary-font);
        font-size: 16px;
        overflow: initial;
        height: 100%;
        background-color: var(--black);
        color: var(--white);
    }

    section, footer {
        scroll-margin: 80px;
    }

    input, textarea {
        background-color: var(--bg-black);
        outline: none;
        border: 1px solid var(--gray-900);
        border-radius: 4px;
        padding: 12px 20px;
        color: var(--gray-400);
        font-family: inherit;
        &::placeholder {
            color: var(--gray-500);
        }
    }
    textarea {
        resize: none;
    }

    .square-before {
        position: relative;
        &::before {
            content: "";
            width: 340px;
            height: 50px;
            background-color: var(--bg-black);
            display: block;
            position: absolute;
            left: -30px;
            top: -10px;
            z-index: 0;
            @media (max-width: ${breakpoints.screenLg}) {
                width: 260px;
                height: 40px;
                left: -15px;
                top: -5px;
            }
        }
    }
    
    .square-after {
        position: relative;
        &::after {
            content: "";
            width: 340px;
            height: 50px;
            background-color: var(--bg-black);
            display: block;
            position: absolute;
            right: -30px;
            bottom: -10px;
            z-index: 0;
            @media (max-width: ${breakpoints.screenLg}) {
                width: 260px;
                height: 40px;
                right: -15px;
                bottom: -5px;
            }
        }
    }

    .page-home {
        overflow: hidden;
    }


    //Animations
    @keyframes scaleIn {
        0% {
            transform: scale(0.75);
            opacity: 0;        
        }
        75% {
            transform: scale(1.05);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    [data-animation="scale-in"] { 
        animation: 600ms scaleIn forwards ease-in-out;
        animation-play-state: paused;
        transform: scale(0);
        opacity: 0;
        @media (min-width: ${breakpoints.screenLg}) {
            animation-delay: calc(var(--index) * 300ms);
        }
    }

    @keyframes fadeIn {
        0% {opacity: 0;}
        70% {opacity: 1;}
        100% {opacity: 1;}
    }

    [data-animation="fade-in"] { 
        animation: var(--fadeAnimationDelay) fadeIn forwards ease-out;
        animation-play-state: paused;
        opacity: 0;
    }

    @keyframes fadeInLeft {
        0% {
            transform: translateX(-20%);
            opacity: 0;        
        }
        70% {opacity: 1;}
        100% {
            transform: translateX(0%);
            opacity: 1;
        }
    }

    [data-animation="fade-in-left"] { 
        animation: var(--fadeAnimationDelay) fadeInLeft forwards;
        animation-play-state: paused;
        transform: translateX(-20%);
        opacity: 0;
    }

    @keyframes fadeInRight {
        0% {
            transform: translateX(20%);
            opacity: 0;        
        }
        70% {opacity: 1;}
        100% {
            transform: translateX(0%);
            opacity: 1;
        }
    }

    [data-animation="fade-in-right"] { 
        animation: var(--fadeAnimationDelay) fadeInRight forwards;
        animation-play-state: paused;
        transform: translateX(20%);
        opacity: 0;
    }

    @keyframes fadeInTop {
        0% {
            transform: translateY(-20%);
            opacity: 0;        
        }
        70% {opacity: 1;}
        100% {
            transform: translateX(0%);
            opacity: 1;
        }
    }

    [data-animation="fade-in-top"] { 
        animation: var(--fadeAnimationDelay) fadeInTop forwards;
        animation-play-state: paused;
        transform: translateY(-20%);
        opacity: 0;
    }

    @keyframes fadeInBottom {
        0% {
            transform: translateY(20%);
            opacity: 0;        
        }
        70% {opacity: 1;}
        100% {
            transform: translateX(0%);
            opacity: 1;
        }
    }

    [data-animation="fade-in-bottom"] { 
        animation: var(--fadeAnimationDelay) fadeInBottom forwards;
        animation-play-state: paused;
        transform: translateY(20%);
        opacity: 0;
    }

    .is-inViewport {
        animation-play-state: running;
    }
    
 `

export default GlobalStyles