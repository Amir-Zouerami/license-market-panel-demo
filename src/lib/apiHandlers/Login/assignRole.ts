import { AssignRole } from "@/types/User";
const ROLE_ENDPOINT = import.meta.env.VITE_API_URL + "user/role/";

interface AssignRoleProps {
  authToken: string;
  roleId: number;
}

export const assignRole = async ({
  authToken,
  roleId,
}: AssignRoleProps): Promise<AssignRole> => {
  try {
    const response = await fetch(ROLE_ENDPOINT + roleId, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("ROLE WAS NOT SET");
    }

    const jsonResponse = await response.json();

    return {
      ok: true,
      data: jsonResponse,
    };
  } catch (error) {
    const responseError: Error = error as Error;

    return {
      ok: false,
      data: responseError,
    };
  }
};
