import React from "react";
import { Layout } from "_components";
import { Link } from "gatsby";

const NotFoundPage = () => (
	<Layout>
		<div>
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			<Link to="/" />
		</div>
	</Layout>
);

export default NotFoundPage;
