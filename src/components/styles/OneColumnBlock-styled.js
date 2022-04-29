import styled from "styled-components";

export const OneColumnBlock = styled.div`

display: flex;
margin-top: var(--spacers);
  & > div {
    width: 58%;
    @media only screen and (min-width: 1920px) {
      width: 52.3%;

    }
  }
  img{
    display: block;
  }
  &.rightAligned{
    flex-direction: row;
    justify-content: right;
    position: relative;
    right: var(--sidePadding);
  }
  &.leftAligned{
    flex-direction: row;
    justify-content: left;
    position: relative;
    left: var(--sidePadding);
  }

  .caption{
    margin-left: 0;
    @media only screen and (min-width: 768px) {
      margin-left: 0;
  
    }
    &.padding{
      margin-left: 10px;

      @media screen and (min-width: 768px) {
          margin-left: 0        }  
  }
  }
`
