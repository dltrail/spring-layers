import { TwoColumnBlock } from "./styles/TwoColumnBlock-styled"
import { StyledCTA } from "./styles/CTA.styled"

export default function block (props) {
  const mainClass = 'TwoColumnBlock';
  return (
  <TwoColumnBlock className={ mainClass + ' ' + props.class }>
     <div>
      <StyledCTA href={props.link} className={props.type}>
        <img src={props.contentOne} alt=""/>
      </StyledCTA>
    </div>
    <div>
      <StyledCTA href={props.link2}>
        <img src={props.contentTwo} alt=""/>
      </StyledCTA>
    </div>
  </TwoColumnBlock>
)
}