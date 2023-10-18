import React from "react";

function usePrevious<T>(value: T) {
	const ref = React.useRef<T>();

	React.useEffect(() => void (ref.current = value), [value]);

	return ref.current;
}

export default usePrevious;
