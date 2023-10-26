import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyleProfileButton = styled.button`
	width: 85%;
	background-color: #c27f3c;
	padding: .75rem;
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

export const ProfileButton = ({ name, path, onClick }) => {
	const navigate = useNavigate();
	const handleClick = () => {
    if (onClick) 
      onClick();
		navigate(path);
    
	};

	return <StyleProfileButton onClick={handleClick}>{name}</StyleProfileButton>;
};
