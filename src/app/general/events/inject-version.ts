import { getJsonFile } from "@mongez/fs";
import { Response, rootPath } from "@warlock.js/core";

const packageJson = getJsonFile(rootPath("package.json"));

Response.on("sending", (response: Response) => {
  const responseCode = response.statusCode;
  if (
    responseCode > 299 ||
    responseCode < 200 ||
    typeof response.body !== "object"
  ) {
    return;
  }

  if (response.body.data) response.body.version = packageJson.version;
});
