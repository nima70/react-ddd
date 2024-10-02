// src/core/IPublishAPI.ts
export interface IPublishAPI {  
    publishMessage(message: string): Promise<string>;
  }