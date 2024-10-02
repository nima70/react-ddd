// src/App.tsx
import React from "react";
import { Provider } from "inversify-react";
import { container } from "./inversify.config";
import HomePage from "./components/HomePage";
const App: React.FC = () => {
  return (
    <Provider container={container}>
      <HomePage />
    </Provider>
  );
};
export default App;