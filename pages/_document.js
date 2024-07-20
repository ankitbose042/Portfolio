import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charset="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#F56D91" />

				<link
					rel="ankit"
					sizes="180x180"
					href="/ankit.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/ankit.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/ankit.png"
				/>
				<link rel="shortcut icon" href="" />
            </Head>
            <body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
