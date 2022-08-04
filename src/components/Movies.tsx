import { TableBody } from "@mui/material";
import { MovieData } from "../interface/MovieData";
import LoadingSpinner from "./LoadingSpinner";
import MovieRow from "./MovieRow";

interface MoviesProps {
  moviesList: MovieData[];
  isLoading: boolean;
}

const Movies = (props: MoviesProps) => {
  return (
    <>
      {props.isLoading ? (
        <LoadingSpinner />
      ) : (
        <TableBody>
          {props.moviesList.map((v, ind) => {
            console.log(v);
            return <MovieRow {...v} key={ind} />;
          })}
        </TableBody>
      )}
    </>
  );
};

export default Movies;
