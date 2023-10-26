import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => props.direction ?? "row"};
	align-content: ${(props) => props.aligncontent ?? "stretch"};
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	height: 50%;
	padding: 1rem 0.25rem;
	color: white;
	& h1 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 1rem;
	}
`;
