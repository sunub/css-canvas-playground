import React from "react";

function useMounted() {
	const [isMounted, setIsMouted] = React.useState(false);

	React.useEffect(() => {
		setIsMouted(true);
	}, []);

	return isMounted;
}

export default useMounted;
