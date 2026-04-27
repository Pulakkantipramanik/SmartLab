// TypeScript interfaces for API data
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface Booking {
  id: number;
  userId: number;
  testId: number;
  status: string;
  createdAt?: string;
}

export interface CreateBookingRequest {
  userId: number;
  testId: number;
}

export interface Report {
  id: number;
  bookingId: number;
  testId: number;
  fileUrl: string;
  createdAt?: string;
}

export interface ApiError {
  message: string;
  status: number;
}