// this file is called before any main file in the other modules

import { onceConnected } from "@warlock.js/cascade";

// This will be called directly when the app starts
onceConnected(async () => {
  //
  console.log("App started");
});
