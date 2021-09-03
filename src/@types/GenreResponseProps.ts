import { ValidGenreName } from "./ValidGenreName";

export interface GenreResponseProps {
  id:    number;
  title: string;
  name:  ValidGenreName;
}