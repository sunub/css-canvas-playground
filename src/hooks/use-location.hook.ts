import React from "react";

function useLocation(elementRef: React.RefObject<HTMLElement>) {
  const [location, setLocation] = React.useState<DOMRect | null>(null);

  React.useEffect(() => {
    if (elementRef.current) {
      const rectLocation = elementRef.current.getBoundingClientRect();
      setLocation(rectLocation);
    }
  }, [elementRef]);

  return location;
}

export default useLocation;
