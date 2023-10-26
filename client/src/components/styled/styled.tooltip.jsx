import styled from "styled-components";

export const TooltipText = styled.div`
  background: rgba(28, 56, 151, 0.9);
  color: #fff;
  width: 200px;
  line-height: 44px;
  border-radius: 3px;
`;

export const TooltipBox = styled.div`
${(props) => props.position === "top" && `bottom: calc(100% + 10px);`}
  position: absolute;
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 0.25rem 0.25rem;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;

  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 90px;
    top: calc(100% - 11px);
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(-45deg);
    transition: border 0.3s ease-in-out;
  }
`;

export const TooltipCard = styled.div`
  position: relative;
  & svg:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 0.25rem 0.25rem;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;
