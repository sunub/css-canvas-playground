import React from "react";

function Dialog({ children }: { children: React.ReactNode }) {
  return <dialog>{children}</dialog>;
}

export default Dialog;
