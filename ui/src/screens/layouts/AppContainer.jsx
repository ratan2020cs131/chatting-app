import React from "react";
const AppContainer = ({ children }) => {
  return <div className="min-h-screen p-4 flex flex-col gap-4 overflow-y-auto">{children}</div>;
};
export default AppContainer;
