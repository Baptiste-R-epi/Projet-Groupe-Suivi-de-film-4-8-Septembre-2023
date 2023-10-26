import styled from "styled-components";

export const Divider = ({ props }) => {
  const StyledDivider = styled.div`
    width: ${props?.width ?? ""};
    height: ${props?.height ?? ""};
    margin: ${props?.margin ?? ""};
    background-color: ${props?.backgroundColor ?? "#ccc"};
  `;

  return <StyledDivider {...props} />;
};
