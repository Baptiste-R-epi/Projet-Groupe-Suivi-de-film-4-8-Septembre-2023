import styled from "styled-components";

export const ScrollableContainer = styled.div`
  height: 100%;

  @media (min-width: 1024px) {
    overflow: scroll;
    height: 50%;
    flex-basis: content;
  }
`;
