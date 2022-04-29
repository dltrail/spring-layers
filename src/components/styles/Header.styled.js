import styled from "styled-components";

export const StyledHeader = styled.header`
// background-color: ${({ theme }) => theme.default.headers};
// color: ${({ theme }) => theme.default.h1};

display: flex;
position: relative;

& *{
    position: relative;
}

// &.slide-in h1{
//     transition: all .5s ease;
//     right: 0;

// }
// &.slide-in img{
//     transition: all .5s ease;
//     left: 0;

// }


h1{
    right: 6%;
    margin-top: 22%;
    text-transform: uppercase;
    font-family: "HelveticaNeueLTStdBd";
    font-size: 25.6px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.9;
    width: 42%;
    letter-spacing: normal;

    @media (min-width: 768px) {
        font-size: 46.4px;
        line-height: 0.9;  
        right: -4%;  
    }
    @media (min-width: 1024px) {
        font-size: 4.7vw;
    }
    @media (min-width: 1280px) {
        font-size: 78.5px;
    }
    @media (min-width: 1440px) {
        font-size: 6vw;
 
    }
    @media (min-width: 1920px) {
        font-size: 117.4px;
        margin-top: 20%;

    }
    @media (min-width: 2560px) {
        font-size: 156.5px; 
    }

    &.mw{
        @media (max-width: 767px) {
            font-size: 35.7px;

        }
        @media (min-width:767px) and (max-width:900px){
            font-size:56.4px;
            }
    }

}

img{
    width: 58%;
    left: var(--sidePadding);
    @media (min-width: 768px) {
        width: 52%;
 
    }
}







`