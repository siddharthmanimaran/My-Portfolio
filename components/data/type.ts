import { IconType } from "react-icons";

export interface IAboutData {
  id: number;
  title: string;
  body: string;
  Icon: IconType;
}

export interface IMetric {
  id: number;
  value: string;
  label: string;
  detail: string;
}

export interface IDetailCard {
  id: number;
  title: string;
  body: string;
}

export interface IExperienceEntry {
  id: number;
  phase: string;
  title: string;
  summary: string;
  points: string[];
}

export interface IResumeCategory {
  id: number;
  title: string;
  items: string[];
}
