import AboutCard from "../components/AboutCard";
import {
    aboutData,
    spotlightMetrics,
    workingPrinciples,
} from "../components/data/data";

const teamValuePoints = [
    "Pixel-perfect React and Next.js interfaces with strong visual sensibility and responsive design.",
    "Node.js REST APIs and Microservice architecture designed for scalability and performance.",
    "Agile collaboration across cross-functional teams — from UX designers to mobile developers to clients.",
];

const About = () => {
    return (
        <div className="page-stack">
            <section className="hero-grid">
                <article className="hero-copy-card transition-dark-mode">
                    <p className="page-kicker">Full Stack Developer</p>
                    <h2 className="hero-title font-display">
                        Building modern web experiences — sharp in the interface, solid in the backend.
                    </h2>
                    <p className="section-intro mt-6 max-w-3xl">
                        I am Siddharth Manimaran, a Full Stack Developer with around 3 years of experience across the
                        complete SDLC — from requirement analysis to deployment and maintenance. I work across React,
                        Next.js, Node.js, and TypeScript, with hands-on experience in Microfrontend architecture, RESTful
                        APIs, SEO optimization, and cross-functional collaboration in e-commerce and finance domains.
                    </p>
                </article>

                <aside className="hero-panel transition-dark-mode">
                    <p className="section-chip">What Teams Get</p>
                    <ul className="feature-list mt-6">
                        {teamValuePoints.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </aside>
            </section>

            <section className="content-block transition-dark-mode">
                <div className="section-heading-row">
                    <div>
                        <p className="section-chip">Snapshot</p>
                        <h3 className="section-heading">Where I create the most value</h3>
                    </div>
                    <p className="section-intro max-w-2xl">
                        I am most effective in environments where responsive UI quality, clean APIs, and scalable
                        architecture all need to move together — backed by clear team communication.
                    </p>
                </div>

                <div className="metrics-grid mt-8">
                    {spotlightMetrics.map((metric) => (
                        <article className="metric-card" key={metric.id}>
                            <p className="metric-card-value">{metric.value}</p>
                            <h4 className="metric-card-label">{metric.label}</h4>
                            <p className="metric-card-detail">{metric.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="content-block transition-dark-mode">
                <div className="section-heading-row">
                    <div>
                        <p className="section-chip">Capabilities</p>
                        <h3 className="section-heading">What I can design, build, and maintain</h3>
                    </div>
                    <p className="section-intro max-w-2xl">
                        My range covers product-facing frontend work, backend implementation, and the technical judgment needed
                        to keep both moving coherently.
                    </p>
                </div>

                <div className="capability-grid mt-8">
                    {aboutData.map((item) => (
                        <AboutCard about={item} key={item.id} />
                    ))}
                </div>
            </section>

            <section className="content-block transition-dark-mode">
                <div className="section-heading-row">
                    <div>
                        <p className="section-chip">Approach</p>
                        <h3 className="section-heading">How I prefer to work</h3>
                    </div>
                    <p className="section-intro max-w-2xl">
                        Good delivery usually comes from structure, communication, and restraint more than from extra complexity.
                    </p>
                </div>

                <div className="principles-grid mt-8">
                    {workingPrinciples.map((principle) => (
                        <article className="insight-card" key={principle.id}>
                            <p className="section-chip">Principle</p>
                            <h4 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{principle.title}</h4>
                            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{principle.body}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
