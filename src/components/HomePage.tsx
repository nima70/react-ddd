// src/components/HomePage.tsx
import React, { useEffect, useState } from "react";
import { useInjection } from "inversify-react";
import { IFooService } from "../core/IFooService";
import { IQueryAPI } from "../core/IQueryAPI";
import { IPublishAPI } from "../core/IPublishAPI";
const HomePage: React.FC = () => {
  const [item, setItem] = useState<string | null>(null);
  const fooService = useInjection<IFooService>("Foo");
  const queryAPI = useInjection<IQueryAPI>("QueryAPI");
  const publishAPI = useInjection<IPublishAPI>("PublishAPI");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedItem = await queryAPI.getItem(1);
        setItem(fetchedItem);
        await publishAPI.publishMessage(fetchedItem);
      } catch (error) {
        console.error("Error fetching or publishing data:", error);
      }
    };
    fetchData();
  }, [queryAPI, publishAPI]);
  return (
    <div>
      <h1>{fooService.getFooMessage()}</h1>
      <p>{item ? item : "Loading..."}</p>
    </div>
  );
};
export default HomePage;