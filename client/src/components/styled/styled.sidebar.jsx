import styled from "styled-components";

export const Sidebar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
  top: 0;

  @media (min-width: 1024px) {
    position: sticky;
  }
`;
