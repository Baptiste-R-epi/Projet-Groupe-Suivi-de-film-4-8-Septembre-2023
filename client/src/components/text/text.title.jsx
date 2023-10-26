import { Link, Link as LinkRouter } from "react-router-dom";

export const LinkTitle = () => {
  return (
    <Link
      to={"/"}
      sx={{
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": { color: "#242222", transition: "0.3s" },
        color: "inherit",
        transition: "0.3s",
      }}
    >
      Ctrl+a Ctrl+x Ctrl+v Ctrl+s
    </Link>
  );
};
