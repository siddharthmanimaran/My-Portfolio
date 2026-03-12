import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};
	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<div className="portfolio-app transition-dark-mode">
				<div className="portfolio-orb portfolio-orb-one" />
				<div className="portfolio-orb portfolio-orb-two" />
				<div className="portfolio-orb portfolio-orb-three" />

				<div className="relative z-10 min-h-screen px-4 py-4 sm:px-6 lg:px-8 xl:py-8">
					<div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-12">
						<div className="xl:col-span-4 xl:self-stretch">
							<Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
						</div>

						<div className="xl:col-span-8">
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
