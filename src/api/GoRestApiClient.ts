import { request, APIRequestContext } from '@playwright/test';
import properties from '../../properties.json';

export class GoRestApiClient {
  static async create(): Promise<APIRequestContext> {
    return await request.newContext({
      baseURL: `${properties.api.goRest.baseUrl}/${properties.api.goRest.apiVersion}/`,
      extraHTTPHeaders: {
        Authorization: `Bearer ${properties.api.goRest.token}`
      }
    });
  }
}
