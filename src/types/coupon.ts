export interface CouponCode {
  code: string;
}

export interface CouponSetUsedParams {
  coupons: CouponCode[];
}

export interface CouponDataError {
  code: string;
}

export interface CouponSetUsedResponse {
  message: string;
  dataError?: CouponDataError[];
}
