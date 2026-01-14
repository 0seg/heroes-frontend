import type { Hero } from "./heroes.interface";

export interface HeroesResponse {
  total: number;
  pages: number;
  heroes: Hero[];
}
