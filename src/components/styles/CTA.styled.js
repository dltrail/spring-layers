import styled from "styled-components";

export const StyledCTA = styled.a`
&.fill{
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%; 
  }
  
    &.as_cta {
    text-transform: uppercase;
    font-weight: 500;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    font-size: 13px;
    margin-top: 25px;
    line-height: normal;
    display: inline-block;
    text-decoration: none;
    font-family: "UntitledSans-Medium";
    color: black;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  
  
      &.cta_underline {
  
          &:after {
              content: "";
              bottom: -1px;
              left: 0;
              width: 100%;
              border-bottom: solid 1px;
              display: block;
              border-bottom-color: inherit;
  
              @media screen and (min-width: 680px) {
                  transform: scale(0);
                  transition: 250ms transform ease-out;
                  transform-origin: 0 0;
              }
          }
  
          &:hover:after {
              @media screen and (min-width: 680px) {
                  transform: scale(1);
                  transform-origin: 100% 0
              }
          }
  
          &.reverse {
              &:after {
                  @media screen and (min-width: 680px) {
                      transform: scale(1);
                  }
              }
  
              &:hover:after {
                  @media screen and (min-width: 680px) {
                      transform: scale(0);
                  }
              }
  
          }
      }
  }
  
    &.caption{
      text-align: left;
      font-size: 12px;
      margin-top: 10px;
      font-family: 'UntitledSans-Regular';
      text-transform: capitalize;
      position: unset;
      left: unset;
      transform: unset;
      display: inline-block;
      letter-spacing: 0.33px;
      &.float{
        position: relative;
        left: 50%;
        @media screen and (min-width: 768px) {
            left: 54.6%;
        }  
    }

    &.dt-padding{
        margin-left: 10px;
        @media screen and (min-width: 768px) {
            margin-left: 26px;
        }  
        @media screen and (min-width: 1280px) {
            margin-left: 48px;
        } 
        @media screen and (min-width: 1920px) {
            margin-left: 51px;
        } 
        @media screen and (min-width: 2560px) {
            margin-left: 55px;
        } 
    }


}
&.end{
    margin-top: calc(var(--spacers) - 10px);
}
  
`