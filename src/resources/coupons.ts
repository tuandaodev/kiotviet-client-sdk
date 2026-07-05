import { KiotVietClient } from '../client';
import { CouponSetUsedParams, CouponSetUsedResponse } from '../types/coupon';

export class CouponHandler {
  constructor(private client: KiotVietClient) {}

  /**
   * Set coupon status to used
   * @param params Object containing array of coupon codes
   * Documentation: POST /coupons/setused
   */
  async setUsed(params: CouponSetUsedParams): Promise<CouponSetUsedResponse> {
    const response = await this.client.apiClient.post<CouponSetUsedResponse>('/coupons/setused', params);
    return response.data;
  }
}
