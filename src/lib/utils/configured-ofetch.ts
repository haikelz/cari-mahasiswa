import { ofetch } from "ofetch";

export const configuredOfetch = <T>(link: string): Promise<T> =>
  ofetch(link, {
    method: "GET",
    parseResponse: JSON.parse,
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
