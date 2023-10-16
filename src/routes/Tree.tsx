import React from "react";
import Branch from "../components/Branch";

function Tree() {

	return (
		<div>
			<Branch name="Top">
				<h1>HI</h1>
				<Branch name="Top Components">
					<h2>World</h2>
				</Branch>
			</Branch>
		</div>
	)
}

export default Tree;
