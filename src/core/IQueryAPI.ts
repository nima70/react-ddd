export interface IQueryAPI {
    getItem(id: number): Promise<string>;
  }