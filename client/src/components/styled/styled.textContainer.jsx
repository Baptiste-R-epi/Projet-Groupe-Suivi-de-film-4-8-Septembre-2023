import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: ${(props) => props.maxWidth || "45%"};
  height: 100%;
  @media (min-width: 320px) {
    padding-left: ${(props) => props.pl || props.p};
    padding-right: ${(props) => props.pr || props.p};
    padding-top: ${(props) => props.pt || props.p};
    padding-bottom: ${(props) => props.pb || props.p};
    max-width: 100%;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 375px) {
    padding-left: ${(props) => props.pl || props.p};
    padding-right: ${(props) => props.pr || props.p};
    padding-top: ${(props) => props.pt || props.p};
    padding-bottom: ${(props) => props.pb || props.p};
    max-width: 100%;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 425px) {
    padding-left: ${(props) => props.pl || props.p};
    padding-right: ${(props) => props.pr || props.p};
    padding-top: ${(props) => props.pt || props.p};
    padding-bottom: ${(props) => props.pb || props.p};
    max-width: 100%;
    margin-bottom: 1.25rem;
  }
`;
