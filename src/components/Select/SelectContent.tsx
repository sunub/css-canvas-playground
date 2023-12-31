import React from "react";
import { createPortal } from "react-dom";
import * as Styled from "./Select.styled";

function SelectContent({
  location,
  children,
}: {
  location: DOMRect | null;
  children: React.ReactNode;
}) {
  const { top = 0, left = 0, width = 0, height = 0 } = location || {};
  const [host, setHost] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const root = document.createElement("div");
    document.body.appendChild(root);
    root.setAttribute("id", "select-root-container");

    setHost(root);

    return () => root.remove();
  }, []);

  if (host == null) return null;

  return createPortal(
    <Styled.Group $top={top + height} $left={left} $width={width}>
      {children}
    </Styled.Group>,
    host
  );
}

export default SelectContent;
