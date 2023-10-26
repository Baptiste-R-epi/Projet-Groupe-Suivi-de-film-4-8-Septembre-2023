import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 25rem;
	height: 50vh;
	overflow: hidden;
	border: 4px solid #748692;
	border-radius: 0.8rem;
	margin-left: 1%;
	margin-right: 1%;
	margin-bottom: 1.25rem;
	position: relative;
	& h3 {
		margin-top: 1rem;
		margin-bottom: 1rem;
		font-size: 1.35rem;
		text-align: center;
    font-weight: 600;
	}
`;

export const CardEpisode = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	height: 30vh;
	overflow: hidden;
	border: 4px solid #748692;
	border-radius: 0.8rem;
	margin: 1%;
	position: relative;
	& h3 {
		margin-top: 1rem;
		margin-bottom: 1rem;
		font-size: 1.35rem;
		text-align: center;
    font-weight: 600;
	}
`;
