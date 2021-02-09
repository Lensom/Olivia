import { ReactComponentElement, ReactNode, ReactSVG } from "react";

export interface INavConfig {
  items: INavItem[];
}

export interface INavItem {
  id: number,
  Image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  text: string,
  url: string,
} 
