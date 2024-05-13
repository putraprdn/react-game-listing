import React, { useContext, useEffect } from "react";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";

import logo from "../assets/images/logo.png";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	
	return (
		<div className="flex items-center p-3">
			<img src={logo} width={60} height={60} alt="Header Logo" />
			<div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
				<HiOutlineMagnifyingGlass />
				<input
					type="text"
					placeholder="Search Games"
					className="px-2 bg-transparent outline-none"
				/>
			</div>

			<div>
				{theme == "light" ? (
					<HiMoon
						className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
						onClick={() => {
							setTheme("dark");
							localStorage.setItem("theme", "dark");
						}}
					/>
				) : (
					<HiSun
						className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
						onClick={() => {
							setTheme("light");
							localStorage.setItem("theme", "light");
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Header;
