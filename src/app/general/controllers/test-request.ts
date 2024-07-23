import {
  type Request,
  type RequestHandler,
  type Response,
} from "@warlock.js/core";
import { UsersGroup } from "app/users-groups/models/users-group";
import usersRepository from "app/users/repositories/users-repository";

const testRequest: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const perm = (title: string) => [
    `${title}.list`,
    `${title}.create`,
    `${title}.update`,
    `${title}.delete`,
  ];

  const group = await UsersGroup.findOrCreate(
    {
      name: "super-admin",
    },
    {
      name: "super-admin",
      permissions: [
        "settings.view",
        "settings.list",
        "settings.update",
        ...perm("customers"),
        ...perm("users"),
      ],
      isActive: true,
    },
  );

  const user = await usersRepository.updateOrCreate(
    {
      email: "ka565872@gmail.com",
    },
    {
      email: "ka565872@gmail.com",
      password: 123123123,
      group: group.embeddedData,
      isActive: true,
      isAuthor: true,
      isAdmin: true,
      gender: "male",
      name: "Karim Adel",
    },
  );

  return response.success({
    group,
    user,
  });
};

testRequest.description = "Test Request";

export default testRequest;
