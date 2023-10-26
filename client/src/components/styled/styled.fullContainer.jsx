import styled from "styled-components";

export const FullContainer = styled.div`
  display: grid;
  overflow: auto;
  margin-top: 1rem;
  margin-right: 0.25rem;
  width: 100%;
  height: 50%;
  flex-basis: content;
  color: black;

  grid-template-rows: 0.5fr 1fr;
  grid-template-areas:
    "content content content content"
    "content content content content"
    "content content content content"
    "content content content content";
  text-align: center;
  grid-gap: 0.25rem;

  @media (min-width: 320px) {
    grid-template-columns: 0.2fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas:
      "content content content content"
      "content content content content"
      "content content content content"
      "content content content content";
    text-align: center;
    grid-gap: 0.25rem;
  }

  @media (min-width: 375px) {
    grid-template-columns: 0.2fr 1fr 1fr 1fr;
    grid-template-rows: 0.65fr 1fr 0.5fr;
    grid-template-areas:
      "content content content content"
      "content content content content"
      "content content content content"
      "content content content content";
    text-align: center;
    grid-gap: 0.25rem;
  }

  @media (min-width: 425px) {
    grid-template-columns: 0.75fr 1fr 1fr 1fr;
    grid-template-rows: 0.75fr 1fr 0.5fr;
    grid-template-areas:
      "content content content content"
      "content content content content"
      "content content content content"
      "content content content content";
    text-align: center;
    grid-gap: 0.25rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 0.75fr 1fr 1fr 1fr;
    grid-template-rows: 0.75fr 1fr 0.5fr;
    grid-template-areas:
      "content content content content"
      "content content content content"
      "content content content content"
      "content content content content";
    text-align: center;
    grid-gap: 0.25rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 0.5fr;
    grid-template-areas:
      "content content content content"
      "content content content content"
      "content content content content"
      "content content content content";
    text-align: center;
    grid-gap: 0.25rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 0.5fr;
    grid-template-areas:
      "content content content content"
      "content content content content"
      "content content content content"
      "content content content content";
    text-align: center;
    grid-gap: 0.25rem;
  }

  @media (min-width: 1536px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 0.5fr;
    grid-template-areas:
      "content content content content"
      "content content content content"
      "content content content content"
      "content content content content";
    text-align: center;
    grid-gap: 0.25rem;
  }

  @media (min-width: 1920px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 0.5fr;
    grid-template-areas:
      "content content content content"
      "content content content content"
      "content content content content"
      "content content content content";
    text-align: center;
    grid-gap: 0.25rem;
  }
`;
