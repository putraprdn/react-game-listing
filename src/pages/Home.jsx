import React, { useEffect, useState } from "react";

import GenreList from "../components/GenreList";
import GlobalAPI from "../services/GlobalAPI";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenre from "../components/GamesByGenre";

const Home = () => {
	const [allGames, setAllGames] = useState([]);
	const [gameListByGenre, setGameListByGenre] = useState([]);
	const [selectedGenreName, setSelectedGenreName] = useState("Action");

	useEffect(() => {
		getAllGamesList();
		getGamesByGenre(4);
	}, []);

	const getAllGamesList = () => {
		GlobalAPI.getAllGames.then((res) => {
			setAllGames(res.data.results);
			setGameListByGenre(res.data.results);
		});
	};

	const getGamesByGenre = (genreId) => {
		GlobalAPI.getGamesByGenre(genreId).then((res) => {
			setGameListByGenre(res.data.results);
		});
	};

	return (
		<div className="grid grid-cols-4 px-5">
			<div className="h-full hidden md:block">
				<GenreList
					genreId={(genreId) => getGamesByGenre(genreId)}
					genreName={(genreName) => setSelectedGenreName(genreName)}
				/>
			</div>
			<div className="col-span-4 md:col-span-3">
				{allGames?.length && gameListByGenre.length > 0 ? (
					<>
						<Banner gameBanner={allGames[0]} />
						<TrendingGames gameList={allGames} />
						<GamesByGenre
							gameList={gameListByGenre}
							selectedGenreName={selectedGenreName}
						/>
					</>
				) : null}
			</div>
		</div>
	);
};

export default Home;
