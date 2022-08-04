import { config } from "../config";

export async function createWikiRequest(query: string) {
  if (query.length === 0) return {};
  const api = `${config.wiki_api_url}srsearch=${query
    .trim()
    .toLocaleLowerCase()}`;
  const response = await fetch(api);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return await response.json();
}

export default { createWikiRequest };
