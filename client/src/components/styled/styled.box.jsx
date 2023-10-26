import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexdirectionrow
      ? "row"
      : props.flexdirectioncolumn
      ? "column"
      : "row"};
  align-items: center;
  justify-content: ${(props) =>
    props.justifycontentcenter
      ? "center"
      : props.justifycontentspacebetween
      ? "space-between"
      : props.justifycontentstart
      ? "flex-start"
      : props.justifycontentend
      ? "flex-end"
      : "center"};
  width: ${(props) => props.width || "100%"};
`;
