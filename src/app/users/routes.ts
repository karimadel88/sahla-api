import { Request, Response, router } from "@warlock.js/core";
import {
  adminPath,
  guarded,
  guardedAdmin,
  guardedGuest,
  guardedGuestAdmin,
} from "app/utils/router";
import activateAccount from "./controllers/auth/activate-account";

import { guestLogin } from "@warlock.js/auth";
import adminLogin from "./controllers/auth/admin-login";
import createAccount from "./controllers/auth/create-account";
import forgetPassword from "./controllers/auth/forget-password";
import login from "./controllers/auth/login";
import logout from "./controllers/auth/logout";
import resendActivationCode from "./controllers/auth/resend-activation-code";
import resetPassword from "./controllers/auth/reset-password";
import verifyForgetPasswordCode from "./controllers/auth/verify-forget-password-code";
import changePassword from "./controllers/profile/change-password";
import myProfile from "./controllers/profile/my-profile";
import updateProfile from "./controllers/profile/update-profile";
import {
  restfulAdmins,
  restfulCustomers,
  restfulSuppliers,
  restfulUsers,
  restfulWalletsOwners,
} from "./controllers/restful-users";

// guest login
router.post([adminPath("/login/guests"), "/login/guests"], guestLogin);

// admin auth
guardedGuestAdmin(() => {
  router.post("/login", adminLogin);
  router.post("/forget-password", forgetPassword);
  router.post("/reset-password", resetPassword);
});

guardedAdmin(() => {
  // users
  router.restfulResource("/users", restfulUsers);
  // customers
  router.restfulResource("/customers", restfulCustomers);

  // admins
  router.restfulResource("/administrators", restfulAdmins);

  // suppliers
  router.restfulResource("/suppliers", restfulSuppliers);

  // wallet owners
  router.restfulResource("/wallet-owners", restfulWalletsOwners);
});

// customers auth
guardedGuest(() => {
  router.post("/login", login);
  router.post("/register", createAccount);
  router.post("/register/verify", activateAccount);
  router.post("/resend-activation-code", resendActivationCode);
  router.post("/forget-password", forgetPassword);
  router.post("/forget-password/verify-code", verifyForgetPasswordCode);
  router.post("/reset-password", resetPassword);
});

// profile routes
guarded(() => {
  router.get("/me", myProfile);
  router.post("/me", updateProfile);
  router.post("/logout", logout);
  router.post("/change-password", changePassword);
});

router.get("/v", (request: Request, response: Response) => {
  return response.success({ message: "hello world" });
});
