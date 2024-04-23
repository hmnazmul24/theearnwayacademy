declare module "shurjopay" {
  interface ShurjoPay {
    config(
      endpoint: string,
      username: string,
      password: string,
      prefix?: string,
      returnUrl?: string
    ): void;
    makePayment(paymentData: PaymentData): Promise<PaymentResponse>;
    verifyPayment(transactionId: string): Promise<VerificationResponse>;
    paymentStatus(transactionId: string): Promise<PaymentStatusResponse>;
    // ... other ShurjoPay methods (if available)
  }

  interface PaymentData {
    // Define properties for payment data based on ShurjoPay's requirements (e.g., amount, currency, customer details, etc.)
  }

  interface PaymentResponse {
    // Define properties for the payment response object (e.g., transaction ID, payment URL, etc.)
  }

  interface VerificationResponse {
    // Define properties for the verification response object (e.g., verification status, transaction details, etc.)
  }

  interface PaymentStatusResponse {
    // Define properties for the payment status response object (e.g., payment status, transaction details, etc.)
  }

  export default function spfactory(): ShurjoPay;
}
