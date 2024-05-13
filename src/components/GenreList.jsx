import React, { useEffect, useState } from "react";

import GlobalAPI from "../services/GlobalAPI";

const GenreList = ({ genreId, genreName }) => {
	const [GenreList, setGenreList] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		getGenreList();
	}, []);

	const getGenreList = () => {
		GlobalAPI.getGenreList.then((res) => {
			setGenreList(res.data.results);
		});
	};

	return (
		<div className="me-5">
			<h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
			{GenreList.map((genre, index) => (
				<div
					key={genre.id}
					onClick={() => {
						setActiveIndex(index);
						genreId(genre.id);
						genreName(genre.name);
					}}
					className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group
                ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}
                `}
				>
					<img
						src={genre.image_background}
						className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300
                        ${activeIndex == index ? "scale-105" : null}
                        `}
					/>
					<h3
						className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300
                    ${activeIndex == index ? "font-bold" : null}
                    `}
					>
						{genre.name}
					</h3>
				</div>
			))}
		</div>
	);
};

export default GenreList;
