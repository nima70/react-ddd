import { injectable } from "inversify";
import { IPublishAPI } from "../core/IPublishAPI";
@injectable()
export class PublishAPI_v1 implements IPublishAPI {
  async publishMessage(message: string): Promise<string> {
    const res = `v1:Published: ${message}`;
    console.log(res);
    return res;
  }
}
@injectable()
export class PublishAPI_v2 implements IPublishAPI {
  async publishMessage(message: string): Promise<string> {
    const res = `v2:Published: ${message}`;
    console.log(res);
    return res;
  }
}