import React from "react";
import Image from "next/image";

import hero from "../../public/assets/ankit.png";
import figma from "../../public/assets/figma.png";
import framer from "../../public/assets/miro.png";
import xd from "../../public/assets/xd.png";

import sketch from "../../public/assets/sketch.png";

import styles from "./HeroImage.module.css";

const HeroImage = () => {
	return (
		<div
			className={styles.container}
			data-aos="zoom-in"
			data-aos-duration="2200"
		>
			<div className={styles.image}>
				<Image
					src={hero}
					alt="Ankit Bose"
					data-aos="fade-up"
					data-aos-duration="2400"
					className={styles.heroImage}
				/>
				<div
					className={styles.figma}
					data-aos="fade-right"
					data-aos-duration="2400"
				>
					<Image src={figma} alt="Figma" />
				</div>
				<div
					className={styles.xd}
					data-aos="fade-right"
					data-aos-duration="2400"
				>
					<Image src={xd} alt="Adobe XD" />
				</div>
				<div
					className={styles.miro}
					data-aos="fade-right"
					data-aos-duration="2400"
				>
					<Image src={framer} alt="framer" />
				</div>
				<div
					className={styles.zeplin}
					data-aos="fade-left"
					data-aos-duration="2400"
				>
					<Image src={sketch} alt="sketch" />
				</div>
			</div>
		</div>
	);
};

export default HeroImage;
