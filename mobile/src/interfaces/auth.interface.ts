export interface User {
    id: number;
    name: string;
    email: string;
    urlPhoto: string | null;
    role: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}