type RoleName = "super admin" | "admin" | "user";
export type Role = { id: number; name: RoleName };

/**
 * This is **NOT** the data type returned from the API call.
 *
 * It is returned from the `/lib/apiHandler/login/login`.
 */
interface LoginResponseSuccess {
  ok: true;
  data: {
    data: {
      access_token: string;
      roles: Role[];
    };
    status: string;
    statusCode: number;
    timestamp: string;
  };
}

/**
 * This is **NOT** the data type returned from the API call.
 *
 * It is returned from the `/lib/apiHandler/login/login`.
 */
interface LoginResponseFail {
  ok: false;
  data: Error;
}

export type LoginResponse = LoginResponseFail | LoginResponseSuccess;

// -----------------------

export interface UserLoginCredentials {
  email: string;
  password: string;
}

// -----------------------

/**
 * This is **NOT** the data type returned from the API call.
 *
 * It is returned from the `/lib/apiHandler/login/assignRole`.
 */
interface AssignRoleSuccess {
  ok: true;
  data: {
    data: {
      access_token: string;
    };
    status: string;
    statusCode: number;
    timestamp: string;
  };
}

/**
 * This is **NOT** the data type returned from the API call.
 *
 * It is returned from the `/lib/apiHandler/login/assignRole`.
 */
interface AssignRoleFail {
  ok: false;
  data: Error;
}

export type AssignRole = AssignRoleSuccess | AssignRoleFail;
