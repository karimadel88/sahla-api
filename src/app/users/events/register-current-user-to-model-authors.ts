/**
 * This event is responsible for adding the current user to any model that is being saved
 * Such as createdBy and updatedBy so you don't need to add it manually.
 */
import { isEmpty } from "@mongez/supportive-is";
import { Model } from "@warlock.js/cascade";
import { requestContext } from "@warlock.js/core";
import { User } from "../models/user";

Model.events()
  .onSaving((model: Model, oldModel?: Model) => {
    const { request } = requestContext<User>();

    const user = request?.user;

    if (!user) return;

    if (!oldModel && isEmpty(model.get("createdBy"))) {
      model.set("createdBy", user.embeddedData);
    }

    model.set("updatedBy", user.embeddedData);
  })
  .onDeleting((model: Model) => {
    const { request } = requestContext<User>();

    const user = request?.user;

    if (!user || user.userType === "guest") return;

    model.set("deletedBy", user.embeddedData);
  });
