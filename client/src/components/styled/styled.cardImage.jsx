import styled from "styled-components";

export const CardImage = styled.img.attrs((props) => ({
  alt: props.alt || "image",
}))`
  width: 100%;
  height: ${(props) => props.height || "auto"};
  max-width: 200px;
  border-radius: 0.5rem 0 0 0.5rem;
`;
