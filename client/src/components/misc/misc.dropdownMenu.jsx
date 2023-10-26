import { styled } from "styled-components";
import { ReactComponent as UserLogo } from "assets/images/user.svg";
import { Link } from "react-router-dom";
import { disconnectUser } from "queries/queries.login";

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
	font-weight: bold;
	font-size: 1.2rem;
	padding: 0.25rem 10px;
	width: 100%;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const StyledList = styled.ul`
	display: flex;
	white-space: nowrap;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const StyledListItem = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	width: 100%;
	&:hover {
		background-color: #fff;
		color: #000;
	}
	&:active {
		background-color: #ccc;
		color: #000;
	}
`;

const StyledRelativeContainer = styled.div`
	position: relative;
`;

const Divider = styled.hr`
	width: 100%;
	height: 1px;
	background-color: ${(props) => props.color};
	border: none;
`;

const StyledAbsoluteContainer = styled.div`
	position: absolute;
	right: 0;
	background-color: #a1a1a1;
	border: 1px solid #111;
	z-index: 1100;
`;

const DropdownMenu = ({ open, onClick }) => {
	const user = localStorage.getItem("user");

	if (open) {
		return (
			<StyledContainer>
				<UserLogo style={{ margin: "0.5rem" }} onClick={onClick} />
				<StyledRelativeContainer>
					<StyledAbsoluteContainer>
						<StyledList>
							{user ? (
								<>
									<StyledListItem>
										<StyledLink to="/user/profile">Mon profil</StyledLink>
									</StyledListItem>
									<Divider color="#000" />
									<StyledListItem>
										<StyledLink
											to="/"
											onClick={() => {
												disconnectUser();
												localStorage.removeItem("user");
											}}
										>
											Se déconnecter
										</StyledLink>
									</StyledListItem>
								</>
							) : (
								<StyledListItem>
									<StyledLink to="/auth/login">Connexion</StyledLink>
								</StyledListItem>
							)}
						</StyledList>
					</StyledAbsoluteContainer>
				</StyledRelativeContainer>
			</StyledContainer>
		);
	} else {
		return (
			<>
				<UserLogo style={{ margin: "0.5rem" }} onClick={onClick} />
			</>
		);
	}
};

export default DropdownMenu;
