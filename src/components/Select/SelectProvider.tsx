import React from "react";

export const SelectContext = React.createContext<any>(null);

function SelectProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const contextValue = React.useMemo(() => {
    const setIsSelectionOpen = () => {
      setIsOpen(!isOpen);
    };

    return { isOpen, setIsSelectionOpen };
  }, [isOpen, setIsOpen]);

  return (
    <SelectContext.Provider value={contextValue}>
      {children}
    </SelectContext.Provider>
  );
}

export default SelectProvider;
