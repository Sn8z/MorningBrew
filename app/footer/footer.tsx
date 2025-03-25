import { Link } from "react-router";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>MorningBrew</p>
      <div className={styles.links}>
        <Link to='https://github.com/Sn8z' target='_blank'>
					Sn8z @ GitHub
        </Link>
      </div>
    </footer>
  );
};
