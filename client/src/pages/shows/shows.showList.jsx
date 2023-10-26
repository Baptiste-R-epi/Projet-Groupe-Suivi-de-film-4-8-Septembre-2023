import { Card } from "components/cards/card.card";
import { CardArticle } from "components/cards/card.cardArticle";
import { Navbar } from "components/layouts/navbar";
import { Box } from "components/styled/styled.box";
import { Container } from "components/styled/styled.container";
import { getAllShows } from "queries/queries.shows";
import { useQuery } from "react-query";

export const ShowList = () => {
	const shows = useQuery({
		queryKey: "shows",
		queryFn: getAllShows,
	});

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

	if (shows.isLoading) {
		return (
			<>
				<Box>
					<Navbar />
				</Box>
				<Container>
					<Card>
						<div>En attente de vos séries...</div>
					</Card>
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
				<h1 style={{ color: "#fff", marginTop: "1.25rem" }}>
					Toutes les séries
				</h1>
			</Box>
			<Container>
				{shows.data.shows.map((show) => (
					<CardArticle key={show.id} show={show} refetch={shows.refetch} />
				))}
			</Container>
		</>
	);
};
