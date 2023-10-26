import { styled } from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgLogo from "assets/images/logo.png";

import DropdownMenu from "components/misc/misc.dropdownMenu";

const NavBarContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #f8f9fa;
	width: 100%;
	justify-content: center;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

const NavBarElement = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: #c27f3c;
	width: 100%;
`;

const Logo = styled.img.attrs({
	src: imgLogo,
	alt: "Logo du site de série",
})`
	width: 64px;
	height: 64px;
	margin: 0.5rem;

	&:hover {
		cursor: pointer;
	}
`;

export const Navbar = () => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const page = window.location.pathname === "/" ? "home" : "other";

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<NavBarContainer>
			<NavBarElement>
				<Logo
					onClick={() => {
						page === "home" ? console.log(page) : navigate("/");
					}}
				/>
				<DropdownMenu onClick={handleOpen} open={open} />
			</NavBarElement>
		</NavBarContainer>
	);
};
