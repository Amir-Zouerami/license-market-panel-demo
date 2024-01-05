type RoleName = "super admin" | "admin" | "user";

export interface LoginResponseSuccess {
  status: string;
  data: {
    access_token: string;
    roles: {
      id: number;
      name: RoleName;
    };
  };
  statusCode: number;
}

export interface LoginResponseFail {
  erros: {
    message: string;
    erorr: string;
    status: number;
  };
  timestamp: number;
}

export interface UserLoginCredentials {
  email: string;
  password: string;
}
