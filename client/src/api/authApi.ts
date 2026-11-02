import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export interface RegisterData {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
}

export interface LoginData {
  email?: string;
  mobile?: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: {
    id: number;
    fullName: string;
    email: string | null;
    mobile: string | null;
  };
}

export const registerUser = async (
  userData: RegisterData
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    `${API_URL}/api/auth/register`,
    userData
  );

  return response.data;
};

export const loginUser = async (
  loginData: LoginData
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    `${API_URL}/api/auth/login`,
    loginData
  );

  return response.data;
};