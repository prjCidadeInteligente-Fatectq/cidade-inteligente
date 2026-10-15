export type Role = 'ADMIN' | 'CIDADÃO';

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
    role: Role;
}