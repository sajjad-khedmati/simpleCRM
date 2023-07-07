import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
			<Toaster />
		</Layout>
	);
}
