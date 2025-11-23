interface ProviderCardResponse {
    id: number;
    name: string;
    urlPhoto: string | null;
    category: string;
    avaregeRate: number;
    reviewCount: number;
    isFavorite: boolean;
}

export { ProviderCardResponse }