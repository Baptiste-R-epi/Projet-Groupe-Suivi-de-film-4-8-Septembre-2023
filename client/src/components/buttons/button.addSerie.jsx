import styled from "styled-components";

const StyleAddSerie = styled.button`
	background-color: #c27f3c;
	padding: 0.75rem;
	border-radius: 0.5rem;
	border: none;
	color: #242222;
	font-weight: 600;
	font-size: 1.25rem;
	margin: 1rem;
	cursor: pointer;
	&:hover {
		background-color: #e8a87c;
	}
	&:active {
		background-color: #a1682f;
	}
`;

export const AddSerie = ({ onClick, children }) => {
	return <StyleAddSerie onClick={onClick}>{children}</StyleAddSerie>;
};
