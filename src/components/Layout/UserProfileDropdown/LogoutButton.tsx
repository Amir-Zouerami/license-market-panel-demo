import logout from "@/lib/JWT/logout";

const LogoutButton = () => {
  return (
    <a
      onClick={() => {
        logout();
        return window.location.replace("/login");
      }}
    >
      خروج از حساب
    </a>
  );
};

export default LogoutButton;
