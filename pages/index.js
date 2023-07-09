import LandingPage from "@/components/templates/LandingPage";
import Head from "next/head";
export default function Home() {
	return (
		<>
			<Head>
				<title>CRM</title>
				<meta name="description" content="this is an simple CRM project" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
					integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>
			</Head>
			<LandingPage />
		</>
	);
}
