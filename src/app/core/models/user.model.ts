export type Role = 'ADMIN' | 'CIDADÃO';

export interface User {
    id: string;
    name?: string;
    lastName?: string;
    phone: string;
    email?: string;
    cpf?: string;
    password?: string;
    createdAt?: string;
    lastLoginAt?: string;
    isActive?: boolean;
    role: Role;
}