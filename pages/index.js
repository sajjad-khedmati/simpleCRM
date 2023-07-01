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
			</Head>
			<LandingPage />
		</>
	);
}
