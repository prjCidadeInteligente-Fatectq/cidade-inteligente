export type Role = 'ADMIN' | 'CIDADAO';

export interface User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    cpf: string;
    password: string;
    createdAt: string;
    lastLoginAt: string;
    isActive: boolean;
}