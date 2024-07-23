import { type Request, type Response } from "@warlock.js/core";

export default async function userHome(request: Request, response: Response) {
  // your code here

  return response.success({
    message: "hello world",
  });
}
