import { Role } from "@/types/User";

export const extractRole = (roles: Role[]) => {
  const roleNames = ["super admin", "admin", "user"];

  for (const roleName of roleNames) {
    const role = roles.find(role => role.name === roleName);
    if (role) return role;
  }
};
