import {
  resumeCategories,
  resumeHighlights,
  resumeStrengths,
} from "../components/data/data";
import useResumeAvailability from "../components/useResumeAvailability";

const Resume = () => {
  const { isChecking, isResumeAvailable, resumePath } = useResumeAvailability();

  const resumeStatus = isChecking
    ? "Checking for local PDF"
    : isResumeAvailable
      ? "Resume PDF available"
      : "Resume PDF not found";

  return (
    <div className="page-stack">
      <section className="hero-grid">
        <article className="hero-copy-card transition-dark-mode">
          <p className="page-kicker">Resume View</p>
          <h2 className="hero-title font-display">
            A focused overview of the stack, workflow, and delivery style behind the portfolio.
          </h2>
          <p className="section-intro mt-6 max-w-3xl">
            This page is designed to give a fast hiring snapshot: the technology range I work in, how I approach shipping,
            and how to access the full PDF when it is available in the project assets.
          </p>

          <div className="resume-toolbar mt-8">
            {isResumeAvailable ? (
              <a className="action-button action-button-primary" download="Siddharth.pdf" href={resumePath}>
                Download PDF Resume
              </a>
            ) : (
              <a
                className="action-button action-button-primary"
                href="mailto:siddharth.goldengrove@gmail.com?subject=Requesting%20Resume"
              >
                Request Resume by Email
              </a>
            )}

            <a className="action-button action-button-secondary" href="mailto:siddharth.goldengrove@gmail.com">
              Contact Directly
            </a>
          </div>
        </article>

        <aside className="hero-panel transition-dark-mode">
          <p className="section-chip">Resume Status</p>
          <div className="status-pill mt-6">{resumeStatus}</div>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {isResumeAvailable
              ? "The portfolio can serve the PDF directly, so hiring teams can preview or download it here."
              : "The portfolio currently shows a structured summary while direct PDF delivery falls back to email contact."}
          </p>

          <div className="stacked-metric-list mt-6">
            {resumeHighlights.map((metric) => (
              <article className="stacked-metric" key={metric.id}>
                <p className="stacked-metric-value">{metric.value}</p>
                <div>
                  <h4 className="metric-card-label">{metric.label}</h4>
                  <p className="metric-card-detail">{metric.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="content-block transition-dark-mode">
        <div className="section-heading-row">
          <div>
            <p className="section-chip">Core Stack</p>
            <h3 className="section-heading">Technologies and workflow areas</h3>
          </div>
          <p className="section-intro max-w-2xl">
            The profile is strongest in modern JavaScript delivery, with enough cross-stack range to keep feature work cohesive end to end.
          </p>
        </div>

        <div className="resume-grid mt-8">
          {resumeCategories.map((category) => (
            <article className="resume-skill-card" key={category.id}>
              <p className="section-chip">{category.title}</p>
              <ul className="skill-tag-list mt-5">
                {category.items.map((item) => (
                  <li className="skill-tag" key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block transition-dark-mode">
        <div className="section-heading-row">
          <div>
            <p className="section-chip">Profile Strengths</p>
            <h3 className="section-heading">What stands out on the resume</h3>
          </div>
          <p className="section-intro max-w-2xl">
            Beyond tools, the strongest differentiator is usually how consistently product intent, interface quality, and implementation discipline are kept aligned.
          </p>
        </div>

        <div className="principles-grid mt-8">
          {resumeStrengths.map((strength) => (
            <article className="insight-card" key={strength.id}>
              <p className="section-chip">Focus Area</p>
              <h4 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{strength.title}</h4>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{strength.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block transition-dark-mode">
        <div className="section-heading-row">
          <div>
            <p className="section-chip">Preview</p>
            <h3 className="section-heading">Resume document panel</h3>
          </div>
          <p className="section-intro max-w-2xl">
            When a PDF is present in the public assets, it renders here directly. Otherwise, the page stays informative instead of failing with an empty frame.
          </p>
        </div>

        <div className="resume-preview-shell mt-8">
          {isResumeAvailable ? (
            <iframe className="resume-frame" src={resumePath} title="Resume preview" />
          ) : (
            <div className="empty-state-card">
              <p className="section-chip">PDF Missing</p>
              <h4 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">Resume preview is currently unavailable.</h4>
              <p className="empty-state-copy mt-4">
                Add Siddharth.pdf to the public folder to restore the inline preview, or use the email action above to share the resume directly.
              </p>
              <a className="action-button action-button-secondary mt-8 inline-flex" href="mailto:siddharth.goldengrove@gmail.com">
                Email for Resume Access
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resume;
