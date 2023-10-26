import { ProfileButton } from "components/buttons/button.profileButton";
import { Card } from "components/cards/card.card";
import { Navbar } from "components/layouts/navbar";
import { Box } from "components/styled/styled.box";
import { Container } from "components/styled/styled.container";
import { H3 } from "components/styled/styled.title";

export const UserProfile = () => {
	const user =
		localStorage.getItem("user") !== null
			? JSON.parse(localStorage.getItem("user"))
			: { name: "Utilisateur anonyme" };
	return (
		<>
			<Box>
				<Navbar />
			</Box>
			<Container aligncontent="center" direction="column">
				<h1>Profil de l'utilisateur</h1>
				<Card>
					<H3>{user.user.login}</H3>
					<ProfileButton name="Mes séries" path="/user/shows" />
					<ProfileButton name="Toutes les séries" path="/shows" />
					<ProfileButton
						name="Deconnexion"
						path="/"
						onClick={() => {
							localStorage.removeItem("user");
						}}
					/>
				</Card>
			</Container>
		</>
	);
};
