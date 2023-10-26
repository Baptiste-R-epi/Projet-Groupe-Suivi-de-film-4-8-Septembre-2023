import { Navbar } from "components/layouts/navbar";
import { Divider } from "components/misc/misc.divider";
import { Box } from "components/styled/styled.box";
import { Container } from "components/styled/styled.container";
import { Content } from "components/styled/styled.content";
import { Sidebar } from "components/styled/styled.sidebar";
import { H1, H2 } from "components/styled/styled.title";
import { login } from "queries/queries.login";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthLogin = () => {
	const email = useRef("");
	const password = useRef("");
	const navigate = useNavigate();
	const [user, setUser] = useState(localStorage.getItem("user"));

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email.current.value, password.current.value).then((res) => {
			localStorage.setItem("user", JSON.stringify(res));
			setUser(res);
			setTimeout(() => {
				navigate("/");
			}, 1500);
		});
	};

	return (
		<>
			<Box>
				<Navbar />
			</Box>
			<Container>
				<Sidebar></Sidebar>
				<Content>
					<H1>
						Connexion via vos information de{" "}
						<a href="https://betaseries.com">betaseries.com</a>
					</H1>
					{!user ? (
						<form action="">
							<label htmlFor="email-login">Email ou nom de compte</label>
							<input
								ref={email}
								type="text"
								name="email-login"
								id="email-login"
							/>
							<Divider />
							<label htmlFor="password">Mot de passe</label>
							<input
								ref={password}
								type="password"
								name="password"
								id="password"
							/>
							<Divider />
							<button type="submit" onClick={handleSubmit}>
								Se connecter
							</button>
						</form>
					) : (
						<H2> Vous êtes connecté</H2>
					)}
				</Content>
			</Container>
		</>
	);
};
