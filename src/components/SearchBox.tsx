import { gql, useQuery } from "@apollo/client";
import { Box, Button, Grid, Input } from "@mui/material";
import React, { useState } from "react";
import { MovieData } from "../interface/MovieData";

interface SearchBoxProps {
  updateCall: React.Dispatch<React.SetStateAction<MovieData[]>>;
  updateLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBox = (props: SearchBoxProps) => {
  const [searched, setSearched] = useState<string>("");
  const movies = useQuery(
    gql`
      query SearchMovies($query: String!) {
        searchMovies(query: $query) {
          name
          overview
          releaseDate
        }
      }
    `,
    { variables: { query: searched } }
  );

  const requestSearch = async (query: string) => {
    movies.refetch({ query }).then((response) => {
      props.updateCall(response.data.searchMovies);
      props.updateLoading(false);
    });
    props.updateLoading(movies.loading);
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") requestSearch(searched);
  };

  return (
    <Grid container>
      <Grid item xs={10}>
        <Box>
          <Input
            fullWidth
            value={searched}
            onKeyDown={onKeyDown}
            onChange={(e) => setSearched(e.target.value)}
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box m={2}>
          <Button onClick={() => requestSearch(searched)}>Search</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SearchBox;
