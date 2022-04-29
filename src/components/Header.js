import { StyledHeader } from "./styles/Header.styled"
import CTA from './CTA';

export default function Header () {
  return (
    <StyledHeader>
        <img src="https://prod-images.allsaints.com/static/2500/220222-MWFEATURE-1.jpg" alt=""/>
        <h1>Spring <br/>Layers</h1>
        <CTA  link="#" tagging="blank" type="fill"/>

    </StyledHeader>
  )
}