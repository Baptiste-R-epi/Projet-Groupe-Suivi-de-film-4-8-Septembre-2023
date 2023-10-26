import styled from "styled-components";

export const ModalParent = styled.div`
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100vw;
	height: 100%;
	background-color: #000000AB;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalShow = styled.dialog`
	position: relative;
	width: 80%;
	height: 80%;
	background-color: #9aaab7;
	border: 4px solid #748692;
	border-radius: 0.8rem;
	padding: 1rem;
	overflow: hidden;
`;
