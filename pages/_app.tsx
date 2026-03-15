import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AnimatedCursor from "../components/AnimatedCursor";
import FloatingDoll from "../components/FloatingDoll";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};
	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<AnimatedCursor />
			<FloatingDoll />
			<div className="portfolio-app transition-dark-mode">
				<div className="portfolio-orb portfolio-orb-one" />
				<div className="portfolio-orb portfolio-orb-two" />
				<div className="portfolio-orb portfolio-orb-three" />

				<div className="relative z-10 min-h-screen px-3 py-4 sm:px-4 lg:px-6 xl:px-6 xl:py-8 2xl:px-8">
					<div className="mx-auto grid w-full max-w-[95rem] gap-5 xl:grid-cols-[minmax(19rem,21rem)_minmax(0,1fr)] xl:gap-6">
						<div className="xl:min-w-0">
							<div className="xl:sticky xl:top-8">
								<Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
							</div>
						</div>

						<div className="xl:min-w-0">
							<div className="app-main-shell transition-dark-mode">
								<Navbar />
								<main className="page-view">
									<Component {...pageProps} />
								</main>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyApp;
