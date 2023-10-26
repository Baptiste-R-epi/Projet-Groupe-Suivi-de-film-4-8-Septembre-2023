import styled from "styled-components";

const StyleCloseModal = styled.button`
  position: fixed;
  right: 0;
  top: 0;
	background-color: #fc1111;
	padding: 0.75rem;
	border-radius: 0.5rem;
	border: none;
	color: #242222;
	font-weight: 600;
	font-size: 1.25rem;
	margin: 1rem;
	cursor: pointer;
	&:hover {
		background-color: #f26d6d;
	}
	&:active {
		background-color: #d91616;
	}
`;

export const CloseModal = ({ onClick, children }) => {
	return <StyleCloseModal onClick={onClick}>{children}</StyleCloseModal>;
};
