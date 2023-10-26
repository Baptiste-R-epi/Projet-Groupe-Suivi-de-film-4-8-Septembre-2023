import { Navbar } from "components/layouts/navbar";
import { Box } from "components/styled/styled.box";
import { getAllUserShows } from "queries/queries.shows";
import { useQuery } from "react-query";
import { Container } from "components/styled/styled.container";
import { Card } from "components/cards/card.card";
import { CardEpisodes } from "components/cards/card.cardEpisodes";

export const UserShowsList = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const shows = useQuery({
		queryKey: ["shows", user],
		queryFn: () => getAllUserShows(user),
	});

	if (shows.isLoading) {
		return (
			<>
				<Box>
					<Navbar />
				</Box>
				<Card>
					<div>En attente de vos séries...</div>
				</Card>
			</>
		);
	}

	if (shows.isError) {
		return (
			<>
				<Box>
					<Navbar />
				</Box>
				<Container>
					<div>Une erreur est survenue</div>
				</Container>
			</>
		);
	}

	return (
		<>
			<Box>
				<Navbar />
			</Box>
      <Box>
        <h1 style={{color: "#fff", marginTop: "1.25rem"}}>Mes séries</h1>
      </Box>
			<Container>
				{shows.data.shows.map((show) => (
					<CardEpisodes key={show.id} show={show} refetch={shows.refetch} />
				))}
			</Container>
		</>
	);
};
