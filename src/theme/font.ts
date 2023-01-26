import PoppinsExtraBold from '../assets/fonts/Poppins-ExtraBold.ttf'
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf'
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf'
import PoppinsLight from '../assets/fonts/Poppins-Light.ttf'

const font: string = `
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsSemiBold}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsExtraBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }`

export { font }
