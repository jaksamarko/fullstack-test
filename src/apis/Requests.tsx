import { config } from "../config";

export async function createWikiRequest(query: string) {
  //Chech for empty string
  if (query.length === 0) return {};

  //Convert to GET request parameter
  const api = `${config.wiki_api_url}srsearch=${query
    .trim()
    .toLocaleLowerCase()}`;

  const response = await fetch(api);
  if (!response.ok) return {};

  return await response.json();
}

export default { createWikiRequest };
