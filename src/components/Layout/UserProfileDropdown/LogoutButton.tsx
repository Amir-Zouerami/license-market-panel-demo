import logout from "@/lib/JWT/logout";

const LogoutButton = () => {
  return (
    <span
      onClick={() => {
        logout();
        return window.location.replace("/login");
      }}
    >
      خروج از حساب
    </span>
  );
};

export default LogoutButton;
