import { Link } from "react-router";
import styles from "./footer.module.css";

export const Footer = () => {

	const style = {
		color: "yellow",
	};

  return (
    <footer className={styles.footer}>
      <p style={style}>MorningBrew</p>
      <div className={styles.links}>
        <Link to='https://github.com/Sn8z' target='_blank'>
          Sn8z @ GitHub
        </Link>
      </div>
    </footer>
  );
};
