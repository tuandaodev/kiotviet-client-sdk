import { KiotVietClient } from '../client';
import {
  VoucherListParams,
  VoucherListResponse,
  VoucherCampaignListParams,
  VoucherCampaignListResponse,
  VoucherCreateParams,
  VoucherReleaseParams,
  VoucherCancelParams,
  VoucherActionResponse,
} from '../types/voucher';

export class VouchersHandler {
  constructor(private client: KiotVietClient) {}

  /**
   * Lấy danh sách đợt phát hành voucher
   */
  async listCampaigns(params?: VoucherCampaignListParams): Promise<VoucherCampaignListResponse> {
    return this.client.get('/vouchercampaign', { params });
  }

  /**
   * Lấy danh sách voucher trong đợt phát hành
   */
  async list(params: VoucherListParams): Promise<VoucherListResponse> {
    return this.client.get('/voucher', { params });
  }

  /**
   * Tạo mới voucher
   */
  async create(data: VoucherCreateParams): Promise<VoucherActionResponse> {
    return this.client.post('/voucher', data);
  }

  /**
   * Phát hành voucher (Give)
   */
  async releaseGive(data: VoucherReleaseParams): Promise<VoucherActionResponse> {
    return this.client.post('/voucher/release/give', data);
  }

  /**
   * Hủy voucher
   */
  async cancel(data: VoucherCancelParams): Promise<VoucherActionResponse> {
    return this.client.delete('/voucher/cancel', { data });
  }
}
