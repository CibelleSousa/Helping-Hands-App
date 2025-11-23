import { ProviderCardResponse } from "./providerCard.interface";

interface ProviderProfileResponse extends ProviderCardResponse {
    focus: string;
    profileText: string;
    experienceText: string;
    availability: string;
    highlight: string[];
}

export { ProviderProfileResponse }