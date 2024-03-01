import { FunctionComponent } from "react";
import { IAboutData } from "./data/type";

const AboutCard: FunctionComponent<{ about: IAboutData }> = ({
  about: { id, title, body, Icon },
}) => {
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green-500 dark:text-Purple" />
      <h4 className="font-bold dark:text-white">{title}</h4>
      <p className="dark:text-white">{body}</p>
    </div>
  );
};

export default AboutCard;
