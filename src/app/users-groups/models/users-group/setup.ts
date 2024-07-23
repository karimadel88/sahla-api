import { UsersGroup } from "./user-group";

export const UsersGroupBlueprint = UsersGroup.blueprint();

export async function usersGroupMigration() {
  UsersGroupBlueprint.unique("id");
}

usersGroupMigration.blueprint = UsersGroupBlueprint;

usersGroupMigration.down = async () => {
  UsersGroupBlueprint.dropUniqueIndex("id");
};
