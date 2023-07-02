import Link from "next/link";
import React from "react";

export default function Error(props) {
	return (
		<>
			an Error has occurded on the server
			<Link href="/">back to home</Link>
		</>
	);
}
