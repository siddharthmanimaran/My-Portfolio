import { FunctionComponent } from "react";
import { IAboutData } from "./data/type";

const AboutCard: FunctionComponent<{ about: IAboutData }> = ({
  about: { title, body, Icon },
}) => {
  return (
    <article className="about-card h-full">
      <span className="about-card-icon">
        <Icon className="h-6 w-6" />
      </span>
      <div className="mt-6">
        <p className="section-chip">Capability</p>
        <h4 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{title}</h4>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
      </div>
    </article>
  );
};

export default AboutCard;
