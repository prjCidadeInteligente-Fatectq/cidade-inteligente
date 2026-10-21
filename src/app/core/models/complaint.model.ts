import { Neighborhood } from './neighborhood.model';

export type ComplaintStatusType = 'PENDENTE' | 'EM ANDAMENTO' | 'CONCLUÍDA';

export interface Complaint {
    id: string;
    problem: string;
    status: ComplaintStatusType;
    street: string;
    neighborhood: Neighborhood;
    register_date: string;
    description: string;
    phone: string;
    imagesPaths: string[];
}