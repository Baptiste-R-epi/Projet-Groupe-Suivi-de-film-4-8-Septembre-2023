import PlaceHolder from "assets/images/placeholder.svg";
import { AddSerie } from "components/buttons/button.addSerie";
import { CloseModal } from "components/buttons/button.closeModal";
import { ModalParent, ModalEpisodes } from "components/misc/misc.modalEpisodes";
import { H2, H3 } from "components/styled/styled.title";
import { addComment, getAllEpisodes } from "queries/queries.episodes";
import { addShow, removeShow } from "queries/queries.shows";
import { useRef, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import useLongPress from "utils/hook.longClick";
import { Card, CardEpisode } from "./card.card";

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

export const CardEpisodes = (props) => {
	const { title, images, description, id, userVisited } = props.show;

	const [hasLongClicked, setHasLongClicked] = useState(false);
	const [hasClicked, setHasClicked] = useState(false);
	const modalRef = useRef(null);
	const modalEpisodeRef = useRef(null);
	const inputComment = useRef(null);
	const episodes = useQuery({
		queryKey: ["episodes", id],
		queryFn: () => getAllEpisodes(id),
	});


	const closeModal = () => {
		setHasClicked(false);
		episodes.refetch();
		modalRef.current.close();
	};

	const closeEpisodeModal = () => {
		setHasLongClicked(false);
		modalEpisodeRef.current.close();
	};

	const handleClickComment = (e) => {
		e.preventDefault();
		console.log("comment");
		addComment();
	};

	const ModalEpisode = ({ }) => (
		<ModalParent>
			<ModalEpisodes ref={modalEpisodeRef} open>
				<div>
					<CloseModal onClick={closeEpisodeModal}>X</CloseModal>
					modal episode
					<form action="">
						<label htmlFor="comment"></label>
						<input type="text" ref={inputComment} name="comment" />
						<button type="submit" onClick={handleClickComment}>
							Envoyer
						</button>
					</form>
				</div>
			</ModalEpisodes>
		</ModalParent>
	);

	const Modal = () => (
		<ModalParent>
			<ModalEpisodes ref={modalRef} open>
				{hasLongClicked ? <ModalEpisode /> : ""}
				<div>
					<CloseModal onClick={closeModal}>X</CloseModal>
					{episodes.data.episodes.map(({ title, show, date, note, description }) => (
						<CardEpisode>
							<H3>{title}</H3>
							<div style={{ width: "100%" }}>
								<img src={show.poster} alt="poster" style={{
									width: "128px",
									heigth: "auto",
									float: "left",
									marginRight: "1.25rem",
								}} />
								<p>{"Date de diffusion : " + date}</p>
								<p>{"Note : " + note.mean.toFixed(1)}</p>
								<br/>
								<p>{description}</p>
							</div>
						</CardEpisode>
					))}
				</div>
			</ModalEpisodes>
		</ModalParent>
	);

	const onLongPress = () => {
		setHasLongClicked(true);
	};

	const onClick = () => {
		setHasClicked(true);
		console.log(episodes);

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
			{hasClicked ? <Modal /> : ""}
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
