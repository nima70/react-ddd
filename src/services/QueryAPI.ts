// src/services/QueryAPI.ts
import { injectable } from "inversify";
import { IQueryAPI } from "../core/IQueryAPI";
@injectable()
export class QueryAPI_v1 implements IQueryAPI {
  async getItem(id: number): Promise<string> {
    return `v1:Item ${id}`;
  }
}
@injectable()
export class QueryAPI_v2 implements IQueryAPI {
  async getItem(id: number): Promise<string> {
    return `v2:Item ${id}`;
  }
}