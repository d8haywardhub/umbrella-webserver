/*
export interface Customer {
    id?: number;
    name: string;
    phone: string;
    address: string;
    membership: string;
}
*/

export interface Customer {
    _id?: number;
    name: string;
    personOfContact: string;
    phone: string;
    location: string;
    numberOfEmployees: number;
    isWet?: boolean;
  }
