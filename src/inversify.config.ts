import { Container } from "inversify";
import "reflect-metadata";
import { IFooService } from "./core/IFooService";
import { FooService } from "./services/FooService";
const container = new Container();
// Bind the FooService to the IFooService interface
container.bind<IFooService>("Foo").to(FooService);
export { container };