import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
    --sidePadding: 0;
    --spacers: 46px;
    --slide-padding: 50%;

    @media (min-width: 768px) {
        --sidePadding: 9.3%;
        --spacers: 45px;

    }
    @media (min-width: 1280px) {
        // --sidePadding: 9.3%;
        --spacers: 72px;
        // --slide-padding: 45%;
    }
    @media (min-width: 1920px) {
    //    --sidePadding: 9.8%;
        
    --spacers: 123px;

     }
}

* {
    box-sizing: border-box;
}

body{
    background: ${({ theme }) => theme.default.headers};
    font-family: 'Arial';
    // text-align: center;
    margin: 0;
}

.container, .container-fluid {
    padding-left: 0;
    padding-right: 0;
}

.content{
    text-align: unset;
}   

h1, p {
    padding: 0;
    margin: 0;
}

img{
    width:100%;
    height: auto;
}

@font-face {
    font-family: 'UntitledSans-Medium';
    src: url("/fonts/untitled-sans/UntitledSans-Medium.woff") format("woff");
}

@font-face {
    font-family: 'UntitledSans-Regular';
src: url("/fonts/untitled-sans/UntitledSans-Regular.woff") format("woff")
}

@font-face {
    font-family: 'HelveticaNeueLTStdBd';
src: url("/fonts/HelveticaNeueLTStdBd/HelveticaNeueLTStd-Bd.eot?") format("embedded-opentype"), url("/fonts/HelveticaNeueLTStdBd/HelveticaNeueLTStd-Bd.woff2") format("woff2"), url("/fonts/HelveticaNeueLTStdBd/HelveticaNeueLTStd-Bd.woff") format("woff"), url("/fonts/HelveticaNeueLTStdBd/HelveticaNeueLTStd-Bd.ttf") format("truetype")
}
    
`
export default GlobalStyles
