import { OneColumnBlock } from "./styles/OneColumnBlock-styled"
import { StyledCTA } from "./styles/CTA.styled"
import CTA from './CTA';

export default function block (props) {
  const mainClass = 'OneColumnBlock';
  return (
  <OneColumnBlock className={ mainClass + ' ' + props.class }>
     <div>
      <StyledCTA href={props.link} className={props.type}>
        <img src={props.contentOne} alt=""/>
      </StyledCTA>
      <CTA name="Caption copy goes here 2" link="#" tagging="blank" type="as_cta cta_underline caption padding"/>
    </div>
 
  </OneColumnBlock>
)
}