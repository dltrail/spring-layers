import { ImageCaption } from "./styles/ImageCaption.styled"

export default function Caption (props) {
  return (
  <ImageCaption>
      <a href={props.link}>{props.content}{props.id}</a>
  </ImageCaption>
)
}