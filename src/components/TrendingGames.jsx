import React, { useEffect } from "react";

const TrendingGames = ({ gameList }) => {
	return (
		<div className="mt-5 hidden md:block">
			<h2 className="font-bold text-[30px] dark:text-white">
				Trending Games
			</h2>
			<div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
				{gameList.map(
					(game, index) =>
						index < 4 && (
							<div
								className="bg-[#76a8f753] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
								key={game.id}
							>
								<img
									className="h-[270px] rounded-t-lg object-cover w-full"
									src={game.background_image}
								/>
								<h2 className="dark:text-white p-2 text-[20px] font-bold">
									{game.name}
								</h2>
							</div>
						)
				)}
			</div>
		</div>
	);
};

export default TrendingGames;
