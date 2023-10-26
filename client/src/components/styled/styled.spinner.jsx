import styled from "styled-components";

export const Spinner = styled.div`
  border: 0.8rem solid #f3f3f3;
  border-top: 0.8rem #3498db solid;
  border-radius: 50%;
  margin-top: 1.25rem;
  height: 4.3rem;
  width: 4.3rem;
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
