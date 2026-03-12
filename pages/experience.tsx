import {
  deliveryModes,
  experienceHighlights,
  experienceJourney,
} from "../components/data/data";

const workingRhythm = [
  "2+ years at Casperon Technologies — feature delivery, architecture, and SEO-driven growth.",
  "7 months at Confluxus.io — React/Node.js applications for sports data and fantasy football.",
  "B.Tech Electronics Engineering from SRM, Chennai — graduated 2020.",
];

const Experience = () => {
  return (
    <div className="page-stack">
      <section className="hero-grid">
        <article className="hero-copy-card transition-dark-mode">
          <p className="page-kicker">Work History</p>
          <h2 className="hero-title font-display">
            3 years across two companies — building, scaling, and optimising full-stack web applications.
          </h2>
          <p className="section-intro mt-6 max-w-3xl">
            From responsive React interfaces and Microfrontend architecture at Casperon Technologies, to
            ReactJS/Node.js sports data applications at Confluxus.io — I have delivered features across the
            full SDLC in Agile and Waterfall environments, collaborating with designers, mobile developers,
            and clients across e-commerce and finance domains.
          </p>
        </article>

        <aside className="hero-panel transition-dark-mode">
          <p className="section-chip">Quick Facts</p>
          <ul className="feature-list mt-6">
            {workingRhythm.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="content-block transition-dark-mode">
        <div className="section-heading-row">
          <div>
            <p className="section-chip">Highlights</p>
            <h3 className="section-heading">Key numbers from real projects</h3>
          </div>
          <p className="section-intro max-w-2xl">
            Real numbers from actual projects — SEO-driven traffic growth, error reduction, and performance
            improvements delivered at Casperon Technologies.
          </p>
        </div>

        <div className="metrics-grid mt-8 metrics-grid-compact">
          {experienceHighlights.map((metric) => (
            <article className="metric-card" key={metric.id}>
              <p className="metric-card-value metric-card-value-small">{metric.value}</p>
              <h4 className="metric-card-label">{metric.label}</h4>
              <p className="metric-card-detail">{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block transition-dark-mode">
        <div className="section-heading-row">
          <div>
            <p className="section-chip">Journey</p>
            <h3 className="section-heading">Where I have worked</h3>
          </div>
          <p className="section-intro max-w-2xl">
            Two companies, three-plus years, two industries — a progression from sports-tech startup to a
            full-featured software development firm.
          </p>
        </div>

        <div className="timeline-stack mt-8">
          {experienceJourney.map((entry) => (
            <article className="timeline-card" key={entry.id}>
              <p className="timeline-phase">{entry.phase}</p>
              <h4 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{entry.title}</h4>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{entry.summary}</p>

              <ul className="timeline-points mt-6">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block transition-dark-mode">
        <div className="section-heading-row">
          <div>
            <p className="section-chip">Strengths</p>
            <h3 className="section-heading">Key achievements and delivery patterns</h3>
          </div>
          <p className="section-intro max-w-2xl">
            From measurable growth metrics to architecture leadership — the areas where I made the biggest difference.
          </p>
        </div>

        <div className="principles-grid mt-8">
          {deliveryModes.map((mode) => (
            <article className="insight-card" key={mode.id}>
              <p className="section-chip">Strength</p>
              <h4 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{mode.title}</h4>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{mode.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
