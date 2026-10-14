import { User } from './user.model';

export type ComplaintStatus = 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDA';

export type ComplaintPriority = 'ALTA' | 'MEDIA' | 'BAIXA';

export interface Complaint {
    id?: number;
    date: string;
    latitude?: number;
    longitude?: number;
    description?: string;
    priority?: ComplaintPriority;
    neighborhood?: string;
    user?: User;
    complaintStatus?: ComplaintStatus;
}