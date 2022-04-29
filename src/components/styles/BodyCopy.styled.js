import styled from "styled-components";

export const BodyCopy = styled.div`
  &.bodyCopy{
    text-align: center;
    font-family: 'UntitledSans-Regular';
    width: 100%;
    margin: var(--spacers) auto 0;
    font-size: 13px;
    line-height: 1.63;
    letter-spacing: 0.62px;
    max-width: 284px;
    width: 100%;
  
    @media only screen and (min-width: 375px) {
      font-size: 16px;
    }

    @media (min-width: 768px) {
      font-size: 13px;
      line-height: 1.69;
      letter-spacing: 0.5px; 
    }
  
    @media only screen and (min-width: 1280px) {
      font-size: 15px;
      line-height: 1.47;
      letter-spacing: 0.58px;
    }
    @media only screen and (min-width: 1920px) {
      font-size: 22px;
      line-height: 1.27;
      letter-spacing: 0.85px;
    }
    
    @media only screen and (min-width: 2560px) {}

  }
 

`