import styled from "styled-components";

export const Content = styled.div`
  background: #9aaab7;
  grid-area: content;
  width: 100%;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) {
    height: fit-content;
  }

  @media (min-width: 375px) {
    height: fit-content;
  }

  @media (min-width: 425px) {
    height: fit-content;
  }

  @media (min-width: 768px) {
    height: fit-content;
  }

  @media (min-width: 1024px) {
    height: 100%;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1280px) {
    height: 100%;
    margin-bottom: 1.25rem;
  }
`;
