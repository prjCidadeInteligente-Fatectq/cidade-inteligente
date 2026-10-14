import { User } from './user.model';

export type ComplaintStatus = 'PENDENTE' | 'EM ANDAMENTO' | 'CONCLUÍDA';

export type ComplaintPriority = 'ALTA' | 'MÉDIA' | 'BAIXA';

export interface Complaint {
    id: number;
    problem: string;
    date: string;
    latitude: number;
    longitude: number;
    description?: string;
    priority: ComplaintPriority;
    neighborhood: string;
    user: User;
    complaintStatus: ComplaintStatus;
    imagePath: string;
}