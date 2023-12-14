import React from "react";
import useToggle from "@hooks/use-toggle";

type Setter = {
  value: boolean;
  setter: () => void;
};

export const SelectionContext = React.createContext<Setter | any>(null);

function SelectionProvier({ children }: { children: React.ReactNode }) {
  const [isSelectionOpen, toggleIsSelectionOpen] = useToggle(false);

  const contextValue = React.useMemo(() => {
    return { value: isSelectionOpen, setter: toggleIsSelectionOpen };
  }, [isSelectionOpen, toggleIsSelectionOpen]);

  return (
    <SelectionContext.Provider value={contextValue}>
      {children}
    </SelectionContext.Provider>
  );
}

export default SelectionProvier;
