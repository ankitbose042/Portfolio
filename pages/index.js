import Head from 'next/head'
import Image from 'next/image'
import {
	Contact,
	Layout,
	Hero,
	Projects,
	Skills,
	Stats,
	Testimonial,
} from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ankit Bose | UI/UX Designer</title>
				<meta
					name="description"
					content="UI/UX Designer: (Figma, Adobe XD)"
				/>
								<meta name="keywords" content="Ankit Bose, UI/UX Design" />

			</Head>
			<Layout>
				<Hero />
				<Skills />
				<Projects />
				<Stats />
				<Testimonial />
				<Contact />
			</Layout>
		</>
	);
}
