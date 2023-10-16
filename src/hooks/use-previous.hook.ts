import React from "react";

function usePrevious<T>(value: T) {
	const prev = React.useRef<T>();
	const prevValue = prev.current;

	React.useEffect(() => {
		prev.current = value;
	}, [value]);

	return prevValue;
}

export default usePrevious;
