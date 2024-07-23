import { env } from "@mongez/dotenv";
import { DatabaseConfigurations } from "@warlock.js/cascade";

const databaseConfigurations: DatabaseConfigurations = {
  url: env(
    "DB_URL",
    "mongodb+srv://ka565872:V6dSEijygAPzuMTH@cluster0.knbzafs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  ),
};

export default databaseConfigurations;
