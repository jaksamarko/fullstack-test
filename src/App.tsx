import { Container, Paper } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import SearchBox from "./components/SearchBox";
import { MovieData } from "./interface/MovieData";

function App() {
  const [moviesList, SetMovieList] = useState<MovieData[]>([]);
  const [loading, SetLoading] = useState<boolean>(false);
  return (
    <Container maxWidth="md">
      <Paper>
        <SearchBox updateCall={SetMovieList} updateLoading={SetLoading} />
        <Movies moviesList={moviesList} isLoading={loading} />
      </Paper>
    </Container>
  );
}

export default App;
