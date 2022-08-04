import { Link, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { createWikiRequest } from "../apis/Requests";
import { MovieData } from "../interface/MovieData";

interface WikiData {
  title: string;
  description: string;
}

const MovieRow = (data: MovieData) => {
  const [wikidata, SetWikidata] = useState<WikiData>({
    title: "",
    description: "",
  });

  const fetchWiki = (query: string) => {
    createWikiRequest(query).then((value) => {
      const results = value.query.search;
      if (results.length) {
        const title = results[0].title;
        //We get a html text, we have to strip out the HTML tags
        const description = results[0].snippet.replace(/<[^>]+>/g, "");

        SetWikidata({ title, description });
      }
    });
  };

  return (
    <>
      <TableRow>
        {Object.keys(data).map((ind: string) => {
          /**
           * The property __typename comes without specifying it in the query so i wanted to remove it
           * but it seems like its the only proper value for "category" (referred from the interview text)
           * so I just leave it for proof of concept to remove unnecessary properties here in the future
           */
          //if (ind.indexOf("__") === 0) return;
          return (
            <TableCell key={ind}>
              {ind === "name" ? (
                <Link onClick={() => fetchWiki(data[ind])}>{data[ind]}</Link>
              ) : (
                data[ind as keyof MovieData]
              )}
            </TableCell>
          );
        })}
      </TableRow>
      {wikidata.title && (
        <TableRow>
          <TableCell>{wikidata.title}</TableCell>
          <TableCell colSpan={3}>{wikidata.description}</TableCell>
        </TableRow>
      )}
    </>
  );
};

export default MovieRow;
