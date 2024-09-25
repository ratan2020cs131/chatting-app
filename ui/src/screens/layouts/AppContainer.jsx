import React from "react";
const AppContainer = ({ children }) => {
  return <div className="h-screen flex flex-col gap-4 overflow-y-auto">{children}</div>;
};
export default AppContainer;
