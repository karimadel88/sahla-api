import { Request, Response, router } from "@warlock.js/core";
import testRequest from "./controllers/test-request";

router.get("/test__", testRequest);

router.get("/", (request: Request, response: Response) => {
  return response.html(`<h1>Bziada App</h1>`);
});
