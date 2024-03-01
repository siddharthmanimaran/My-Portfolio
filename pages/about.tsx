
import AboutCard from "../components/AboutCard";
import { aboutData } from "../components/data/data";

const About = () => {
    return (
        <div className="flex flex-col flex-grow px-6 pt-1">
            <h5 className="my-3 text-base font-medium dark:text-Purple">
                Hi, I am Siddharth, a results-driven Software Engineer with over 3 years of hands-on experience in full-stack development.
                Proficient in JavaScript frameworks like React, NextJs and Node.js, with a solid background in designing and implementing scalable web applications.
                Experienced in collaborating with cross-functional teams and clients from diverse industries, including e-commerce and finance.
                Adept at applying Agile methodologies to deliver high-quality software solutions. Possesses a track record of leading successful projects from concept to deployment,
                optimizing code efficiency, and ensuring robust, user-centric applications. Demonstrates excellent problem-solving skills, effective communication,
                and a passion for staying updated with emerging technologies to drive innovation and efficiency.
            </h5>
            <div
                className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-gray-500 w-300 h-200 overflow-auto scrollbar-hide"
                style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem", height: "220px" }}
            >
                <h6 className="my-3 text-xl font-semibold tracking-wide">
                    What I Can Do
                </h6>
                <div className="grid gap-6 my-3 md:grid-cols-2">
                    {aboutData.map((aboutData) => (
                        <div
                            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black md:col-span-1  transition-dark-mode"
                            key={aboutData.id}
                        >
                            <AboutCard about={aboutData} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
