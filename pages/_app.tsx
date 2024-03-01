import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};
	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<div className={`${darkMode ? "bg-black" : 'bg-gradient-to-r from-green-400 to-blue-400'} transition-dark-mode`}>
				{/* <AnimatedCursor
					innerSize={10}
					outerSize={10}
					color='30, 30, 30'
					outerAlpha={0.2}
					innerScale={0.7}
					outerScale={5}
					clickables={[
						'a',
						'input[type="text"]',
						'input[type="email"]',
						'input[type="number"]',
						'input[type="submit"]',
						'input[type="image"]',
						'label[for]',
						'select',
						'textarea',
						'button',
						'.link'
					]}
				/> */}
				<div className="grid grid-cols-12 gap-6 p-5 h-screen lg:px-10 sm:px-20 md:px-32 ">
					<div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl dark:bg-black transition-dark-mode">
						<Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
					</div>
					<div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-black transition-dark-mode">
						<Navbar />
						<Component {...pageProps} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyApp;
