import { useNavigate } from "react-router-dom";

export const NavbarButton = ({ name, path, styleSelf }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(path);
	};

	return (
		<button style={ styleSelf ? {...styleSelf} : { color: "inherit", padding: "1.25rem" }} onClick={handleClick}>
			{name}
		</button>
	);
};
