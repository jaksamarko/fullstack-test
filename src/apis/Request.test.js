import { createWikiRequest } from "./Requests";

it("Wiki Api testing", async function () {
  createWikiRequest("Star Wars").then((value) => {
    const response = value.query.search;
    expect(response.length).toBeGreaterThan(0);
  });
});
