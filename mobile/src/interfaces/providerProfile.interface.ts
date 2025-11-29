import { ProviderCardResponse } from "./provideCard.interface";

interface ProviderProfileResponse extends ProviderCardResponse {
    focus: string;
    profileText: string;
    experienceText: string;
    availability: string;
    highlight: string[];
}

export { ProviderProfileResponse }