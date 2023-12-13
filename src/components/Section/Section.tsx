import React from "react";
import * as Styled from "./Section.styled";

function Section({ target, items }: { target: HTMLElement; items: string[] }) {
  const [rect] = React.useState<DOMRect | null>(() => {
    return target.getBoundingClientRect();
  });

  return (
    <Styled.Wrapper
      $top={rect ? rect?.top + rect?.height : 0}
      $left={rect ? rect.left : 0}
      $width={rect ? rect.width : 0}
    >
      {items.map((item) => {
        return <Styled.Item key={item}>{item}</Styled.Item>;
      })}
    </Styled.Wrapper>
  );
}

export default Section;
