export interface MovieProps {
  imdbID:  string;
  Title:   string;
  Poster:  string;
  Runtime: string;
  Ratings: Array<{
    Source: string;
    Value:  string;
  }>;
}