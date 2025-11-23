export interface AuthResponse {
  user: {
    id: number;
    name: string;
    email: string;
    urlPhoto: string | null; 
    role: string;
  };
  token: string;
}