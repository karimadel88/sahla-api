import { Aggregate, database } from "@warlock.js/cascade";
import { User } from "../models/user";

User.events().onSaved(async (user: User) => {
  // list all collections in the database
  const collections = await database.listCollectionNames();

  for (const collection of collections) {
    new Aggregate(collection).where("createdBy.id", user.id).update({
      createdBy: user.embeddedData,
    });

    new Aggregate(collection).where("updatedBy.id", user.id).update({
      updatedBy: user.embeddedData,
    });
  }
});
