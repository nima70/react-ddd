// src/inversify.config.ts
import { Container } from "inversify";
import "reflect-metadata";
import { IFooService } from "./core/IFooService";
import { FooService } from "./services/FooService";
import { PublishAPI_v1, PublishAPI_v2 } from "./services/PublishAPI";
import { QueryAPI_v1, QueryAPI_v2 } from "./services/QueryAPI";
const container = new Container();
// Bind the FooService to the IFooService interface
container.bind<IFooService>("Foo").to(FooService);
// Determine the version of PublishAPI to use based on environment variable
switch (process.env.PUBLISH_API_VERSION) {
  case "2":
    container.bind("PublishAPI").to(PublishAPI_v2);
    break;
  default:
    container.bind("PublishAPI").to(PublishAPI_v1);
    break;
}
// Determine the version of QueryAPI to use based on environment variable
switch (process.env.QUERY_API_VERSION) {
  case "2":
    container.bind("QueryAPI").to(QueryAPI_v2);
    break;
  default:
    container.bind("QueryAPI").to(QueryAPI_v1);
    break;
}
export { container };