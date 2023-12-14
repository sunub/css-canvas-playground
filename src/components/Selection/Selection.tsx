import React from "react";
import SelectionProvier from "./SelectionProvider";
import SelectionTrigger from "./SelectionTrigger";
import { SelectionGroup, SectionItem } from "./SelectionGroup";

function Selection({ items }: { items: string[] }) {
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [index, setIndex] = React.useState(0);
  const [rect, setRect] = React.useState<DOMRect | any>(null);

  React.useEffect(() => {
    setRect(triggerRef.current?.getBoundingClientRect());
  }, [index]);

  return (
    <SelectionProvier>
      <SelectionTrigger name={items[index]} ref={triggerRef} />
      {rect && (
        <SelectionGroup rect={rect}>
          {items.map((item, itemIndex) => {
            return (
              <SectionItem
                key={item}
                index={itemIndex}
                currIndex={index}
                item={items[itemIndex]}
                setIndex={setIndex}
              />
            );
          })}
        </SelectionGroup>
      )}
    </SelectionProvier>
  );
}

export default Selection;
