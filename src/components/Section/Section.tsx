import React from "react";
import * as Styled from "./Section.styled";

type Setter = {
  toggle: () => void;
  section: React.Dispatch<React.SetStateAction<number>>;
};

function Section({
  target,
  items,
  setter,
}: {
  target: HTMLElement;
  items: string[];
  setter: Setter;
}) {
  const [rect] = React.useState<DOMRect | null>(() => {
    return target.getBoundingClientRect();
  });

  return (
    <Styled.Wrapper
      $top={rect ? rect?.top + rect?.height : 0}
      $left={rect ? rect.left : 0}
      $width={rect ? rect.width : 0}
    >
      {items.map((item, i) => {
        return (
          <Styled.Item
            key={item}
            onClick={() => {
              setter.toggle();
              setter.section(() => i);
            }}
          >
            {item}
          </Styled.Item>
        );
      })}
    </Styled.Wrapper>
  );
}

export default Section;
