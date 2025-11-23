interface TokenPayload {
  id: number;
  name: string;
  role: string;
  iat: number;
  exp: number;
}

export { TokenPayload }