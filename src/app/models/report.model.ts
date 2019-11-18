
export interface CustomerReport {
    name: string;
    personOfContact: string;
    phone: string;
    location: string;
    numberOfEmployees: number;
    isWet?: boolean;
    whenRaining: number[];
}