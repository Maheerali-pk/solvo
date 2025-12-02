import React from "react";
import { project1 } from "./data/projects/project1";
import { project2 } from "./data/projects/project2";
import { project3 } from "./data/projects/project3";
import { project4 } from "./data/projects/project4";
import { project5 } from "./data/projects/project5";
import { project6 } from "./data/projects/project6";
import { project7 } from "./data/projects/project7";
import { project8 } from "./data/projects/project8";
import { project9 } from "./data/projects/project9";
import { project10 } from "./data/projects/project10";
import { project11 } from "./data/projects/project11";

export interface IFullProject {
  title: string;
  description: string;
  image: string;
  link: string;
  summary: IProjectSection[];
  sections: IProjectSection[];
}

export interface IProjectSection {
  title: string;
  description: React.ReactNode;
}

export const allFullProjects: IFullProject[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
];
