import { KiotVietClient } from '../client';
import { KiotVietListResponse } from '../types';
import { Location } from '../types/location';

export class LocationHandler {
  constructor(private client: KiotVietClient) {}

  /**
   * List locations
   * Documentation: GET /locations
   */
  async list(): Promise<KiotVietListResponse<Location>> {
    const response = await this.client.apiClient.get<KiotVietListResponse<Location>>('/locations');
    return response.data;
  }
}
