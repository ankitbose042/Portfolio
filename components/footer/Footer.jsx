import React from "react";
import styles from "./Footer.module.css";
import Icon from "../icon/Icon";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<h1 className={styles.tagline}>Based in India, working Worldwide</h1>
				<div className={styles.social}>
					<Icon url="https://www.behance.net/ankitbose8" icon="behance" />
					<Icon
						url="https://www.linkedin.com/in/ankitbose904/"
						icon="linkedin"
					/>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>Copyright © {new Date().getFullYear()} Ankit </p>
			</div>
		</footer>
	);
};

export default Footer;
