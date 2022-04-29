import { BodyCopy } from "./styles/BodyCopy.styled";


export default function Copy (props) {
  return (
  <BodyCopy className={props.name}>
      <p>{props.copy}</p>
 </BodyCopy>
)
}