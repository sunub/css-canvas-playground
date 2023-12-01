import React from "react";

export const InputContext = React.createContext<any>(null);

function InputProvider({ children }: { children: React.ReactNode }) {
  const [isInputFocused, setIsInputFocused] = React.useState(false);

  const contextValue = React.useMemo(() => {
    return [isInputFocused, setIsInputFocused];
  }, [isInputFocused, setIsInputFocused]);

  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
}

export default InputProvider;
