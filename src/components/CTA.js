import { StyledCTA } from "./styles/CTA.styled";

export default function CTA (props) {
    return (
      <StyledCTA
      className={props.type}
      href={props.link}
       title="AllSaints UK - Sustainable Information" 
       data-category="Content Page" 
       data-action="Gender page" 
       data-label="New Season/Women/08-02-22/Image/Sustainable Collection/PageSection 6" 
       aria-label="Sustainable Information"
      >
        {props.name}
      </StyledCTA>
  )
}