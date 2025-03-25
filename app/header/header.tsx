import { Link } from "react-router";
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
          <Link to={page.href} key={page.title}>
            {page.title}
          </Link>
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
