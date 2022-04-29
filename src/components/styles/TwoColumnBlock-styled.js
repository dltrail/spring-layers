import styled from "styled-components";

export const TwoColumnBlock = styled.div`

display: flex;
flex-direction: row;
margin-top: var(--spacers);

& > div {
  z-index: 99;
  width: %;
  @media only screen and (min-width: 768px) {
    width: 45.3%;

  }

}

&.slideRight{
  & > :nth-child(2) {
    right: var(--slide-padding);
    position: relative;
    z-index: 0;
}
}
&.slideLeft{
  justify-content: right;
  & > :nth-child(1) {
    left: var(--slide-padding);

    position: relative;
    z-index: 0;
  }
}
`
