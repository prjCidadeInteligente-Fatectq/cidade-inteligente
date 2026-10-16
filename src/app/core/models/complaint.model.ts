import { User } from './user.model';

import { Neighbohood } from './neighborhood.model';

export type ComplaintStatus = 'PENDENTE' | 'EM ANDAMENTO' | 'CONCLUÍDA';

export interface Complaint {
    id: number;
    problem: string;
    date: string;
    latitude: number;
    longitude: number;
    street: string;
    description?: string;
    neighborhood: Neighbohood;
    user: User;
    complaintStatus: ComplaintStatus;
    imagePath: string;
}