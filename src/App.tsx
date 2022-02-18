import React from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import AppProvider from "./store/AppProvider";

const App: React.FC = () => {
  return (
    <div className="app">
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
};

export default App;
