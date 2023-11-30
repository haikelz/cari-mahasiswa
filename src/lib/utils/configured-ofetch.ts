import { ofetch } from "ofetch";

export const configuredOfetch = (link: string): Promise<any> =>
  ofetch(link, {
    method: "GET",
    parseResponse: JSON.parse,
    responseType: "json",
  });
