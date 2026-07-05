import { KiotVietListResponse } from './common';

export interface VoucherCampaign {
  id: number;
  code: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  status: number;
  statusValue: string;
  isActive: boolean;
  createdDate: string;
  createdBy: number;
  modifiedDate?: string;
  modifiedBy?: number;
  branchId: number;
  branchIds?: number[];
  customerGroupIds?: number[];
  discountType: number;
  discountValue: number;
  minOrderValue?: number;
  maxDiscountValue?: number;
  quantity: number;
  usedQuantity: number;
  remainingQuantity: number;
  isAutoGenerate: boolean;
  isUnlimited: boolean;
}

export interface Voucher {
  id: number;
  code: string;
  campaignId: number;
  campaignCode: string;
  campaignName: string;
  startDate: string;
  endDate: string;
  status: number;
  statusValue: string;
  isUsed: boolean;
  usedDate?: string;
  customerId?: number;
  customerCode?: string;
  customerName?: string;
  orderId?: number;
  orderCode?: string;
  discountValue: number;
  createdDate: string;
  createdBy: number;
  modifiedDate?: string;
  modifiedBy?: number;
}

export interface VoucherCampaignListParams {
  includeVoucherBranchs?: boolean;
  includeVoucherUsers?: boolean;
  isActive?: boolean;
  id?: number;
  isGlobal?: boolean;
  forAllCusGroup?: boolean;
  forAllUser?: boolean;
}

export interface VoucherListParams {
  campaignId: number;
  status?: number;
  lastModifiedFrom: string;
  code?: string;
}

export interface VoucherCodeData {
  code?: string;
  Code?: string;
}

export interface VoucherCreateParams {
  voucherCampaignId: number;
  data: VoucherCodeData[];
}

export interface VoucherReleaseParams {
  CampaignId: number;
  Vouchers: VoucherCodeData[];
  ReleaseDate: string;
}

export interface VoucherCancelParams {
  CampaignId: number;
  Vouchers: VoucherCodeData[];
}

export interface VoucherListResponse extends KiotVietListResponse<Voucher> {}
export interface VoucherCampaignListResponse extends KiotVietListResponse<VoucherCampaign> {}

export interface VoucherActionResponse {
  message: string;
}
