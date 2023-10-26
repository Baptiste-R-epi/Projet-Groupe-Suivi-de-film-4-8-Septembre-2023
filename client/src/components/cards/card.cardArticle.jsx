import PlaceHolder from "assets/images/placeholder.svg";
import { AddSerie } from "components/buttons/button.addSerie";
import { CloseModal } from "components/buttons/button.closeModal";
import { ModalParent, ModalShow } from "components/misc/misc.modalShow";
import { H2 } from "components/styled/styled.title";
import { addShow, removeShow } from "queries/queries.shows";
import { useRef, useState } from "react";
import Rating from "react-rating";
import styled from "styled-components";
import useLongPress from "utils/hook.longClick";

const GroupIcon = styled.div`
	display: none;
	position: absolute;
	right: 0;
`;

const Style_container = styled.div`
	display: flex;
	background-color: #9aaab7;
	flex-direction: column;
	justify-content: flex-start;
	width: 25rem;
	height: 50vh;
	overflow: hidden;

	border: 4px solid #748692;
	border-radius: 0.8rem;

	margin-left: 1%;
	margin-right: 1%;
	margin-bottom: 1.25rem;
	position: relative;

	&:hover ${GroupIcon} {
		display: block;
	}
`;

const style_img = {
	width: "164px",
	height: "auto",
	float: "left",
	marginRight: "1rem",
};

export const CardArticle = (props) => {
	
	const {
		title,
		images,
		description,
		user,
		id,
		userVisited,
		seasons,
		episodes,
		length,
		notes,
		genres,
	} = props.show;

	const [hasLongClicked, setHasLongClicked] = useState(false);
	const modalRef = useRef(null);

	const closeModal = (event) => {
		setHasLongClicked(false);
		modalRef.current.close();
	};

	const Modal = ({
		title,
		images,
		description,
		seasons,
		episodes,
		length,
		notes,
		genres,
	}) => (
		<ModalParent>
			<ModalShow ref={modalRef} open>
				<div>
					<div style={{ position: "relative" }}>
						<CloseModal onClick={closeModal}>X</CloseModal>
					</div>
					<p>Titre : {title}</p>
					<img
						src={images.show ?? PlaceHolder}
						style={{ width: "164px", height: "auto" }}
					/>
					<p>
						Description :{" "}
						{description !== "" ? description : "pas de description"}
					</p>
					<p>
						Nombre de {seasons > 1 ? "saisons" : "saison"} : {seasons}
					</p>
					<p>
						Nombre d'{episodes > 1 ? "épisodes" : "épisode"} : {episodes}
					</p>
					<p>
						Durée :{" "}
						{length > 1 ? `${length} minutes` : "aucune durée"}{" "}
					</p>
					<div>
						Note:{" "}
						<Rating
							start={0}
							stop={5}
              fractions={2}
							initialRating={parseInt(notes)}
							readonly
						/>{" "}
						<span style={{ fontSize: "1.5rem" }}>{notes.toFixed(1)}</span>
					</div>
					<ul style={{ backgroundColor: "#cfffff", listStyle: "none" }}>
						Genres:{" "}
						{Object.values(genres).length > 0 ? (
							Object.values(genres).map((genre) => (
								<li style={{ paddingLeft: ".75rem" }} key={genre}>
									{genre}
								</li>
							))
						) : (
							<li>pas de genre</li>
						)}
					</ul>
				</div>
			</ModalShow>
		</ModalParent>
	);

	const onLongPress = () => {
		console.log(
			title,
			images,
			description,
			user,
			id,
			userVisited,
			seasons,
			episodes,
			length,
			notes.mean,
			...Object.values(genres)
		);
		setHasLongClicked(true);
	};

	const onClick = () => {
		console.log("click is triggered");
	};

	const defaultOptions = {
		shouldPreventDefault: true,
		delay: 500,
	};

	const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

	const handleClick = () => {
		if (userVisited?.in_account) {
			removeShow(id);
		} else {
			addShow(id);
		}
		setTimeout(() => {
			props.refetch();
		}, 750);
	};

	return (
		<>
			{hasLongClicked ? (
				<Modal
					title={title}
					images={images}
					description={description}
					seasons={seasons}
					episodes={episodes}
					length={length}
					notes={notes.mean}
					genres={genres}
				/>
			) : (
				""
			)}
			<Style_container {...longPressEvent}>
				<div>
					<img
						style={style_img}
						src={images?.show ?? PlaceHolder}
						alt={title}
					/>
					<H2 style={{ lineHeight: "2.1rem" }}>{title}</H2>
				</div>
				<p>{description}</p>

				<GroupIcon>
					<AddSerie onClick={handleClick}>
						{userVisited?.in_account ? " - " : " + "}
					</AddSerie>
				</GroupIcon>
			</Style_container>
		</>
	);
};
