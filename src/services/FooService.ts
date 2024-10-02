// src/services/FooService.ts
import { injectable } from "inversify";
import { IFooService } from "../core/IFooService";
@injectable()
export class FooService implements IFooService {
  getFooMessage() {
    return "Hello from FooService!";
  }
}