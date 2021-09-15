import { IconType } from 'react-icons'

export interface IService{
    title: string;
    about: string;
    Icon: IconType
}

export interface ISkill{
    Icon: IconType;
    name: string;
    level: string;
}

export interface IProject{
    id:number;
    name:string;
    description:string;
    image_path:string;
    deployed_url:string;
    github_url:string;
    category:Category[];
    tech_stack:string[];
}

export type Category = "react" | "node" | "express" | "typescript" | "mongo";