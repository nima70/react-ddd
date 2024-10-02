// src/components/HomePage.tsx
import React from "react";
import { useInjection } from "inversify-react";
import { IFooService } from "../core/IFooService";
const HomePage: React.FC = () => {
  const fooService = useInjection<IFooService>("Foo");
  return (
    <div>
      <h1>{fooService.getFooMessage()}</h1>
    </div>
  );
};
export default HomePage;