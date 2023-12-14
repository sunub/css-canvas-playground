import React from "react";
import SelectionTrigger from "./SelectionTrigger";
import SelectionGroup from "./SelectionGroup";
import SelectionItem from "./SelectionItem";
import useToggle from "@hooks/use-toggle";
import { createPortal } from "react-dom";

function Selection({
  items,
  index,
  setIndex,
}: {
  items: string[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [isSelectionOpen, setIsSelectionOpen] = useToggle();
  const [currSelection, setCurrSelection] = React.useState<boolean[]>(
    Array.from({ length: items.length }, () => false)
  );
  const [rect, setRect] = React.useState<DOMRect | any>(null);

  function handleItemClick(itemIndex: number) {
    setIndex(itemIndex);
    setIsSelectionOpen();

    const newSelection = currSelection.map((_, index) => {
      return index === itemIndex ? true : false;
    });
    setCurrSelection(newSelection);
  }

  React.useEffect(() => {
    function handleResize() {
      setRect(triggerRef.current?.getBoundingClientRect());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    setRect(triggerRef.current?.getBoundingClientRect());
  }, [isSelectionOpen]);

  console.log("rendered");

  return (
    <>
      <SelectionTrigger
        ref={triggerRef}
        name={items[index]}
        isOpen={isSelectionOpen}
        setter={() => setIsSelectionOpen()}
      />
      {isSelectionOpen &&
        createPortal(
          <SelectionGroup rect={rect}>
            {items.map((item, itemIndex) => {
              return (
                <SelectionItem
                  key={item}
                  item={items[itemIndex]}
                  currSelection={currSelection[itemIndex]}
                  handleItemClick={() => handleItemClick(itemIndex)}
                />
              );
            })}
          </SelectionGroup>,
          document.getElementById("select-root") as HTMLElement
        )}
    </>
  );
}

export default Selection;
