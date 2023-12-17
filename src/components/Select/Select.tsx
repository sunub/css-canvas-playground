import React from "react";
import SelectTrigger from "./SelectTrigger";
import SelectContent from "./SelectContent";
import useToggle from "@hooks/use-toggle";
import SelectItem from "./SelectItem";
import useLocation from "@hooks/use-location.hook";

function Select({
  items,
  action,
}: {
  items: string[];
  action: (value: string) => void;
}) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const elementRef = React.useRef<HTMLButtonElement>(null);
  const location = useLocation(elementRef);
  const [isOpen, toggleOpen] = useToggle();

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      const currentTarget = event.target as HTMLElement;
      if (!rootRef.current?.contains(currentTarget) && isOpen) {
        toggleOpen();
      }
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [rootRef, isOpen, toggleOpen]);

  return (
    <div ref={rootRef}>
      <SelectTrigger ref={elementRef} isOpen={isOpen} toggleOpen={toggleOpen} />
      {isOpen && (
        <SelectContent location={location}>
          {items.map((item) => (
            <SelectItem
              key={item}
              value={item}
              toggleOpen={toggleOpen}
              action={action}
            />
          ))}
        </SelectContent>
      )}
    </div>
  );
}

export default React.memo(Select);
