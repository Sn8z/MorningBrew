import { Link, NavLink } from "react-router";
import styles from "./header.module.css";
import { Logo } from "~/Logo/logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link to='/'>
          <Logo size={32} />
        </Link>
      </div>

      <div className={styles.links}>
        {pages.map((page) => (
          <NavLink
            to={page.href}
            key={page.title}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
            {page.title}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
];
