export type ComplaintStatusType = 'PENDENTE' | 'EM ANDAMENTO' | 'CONCLUÍDA';

export interface ComplaintById {
    neighborhoodId: string;
    priority: string;
    complaintsByNeighborhood: Complaint[];
}

export interface Complaint {
    id: string;
    problem: string;
    status: ComplaintStatusType;
    street: string;
    neighborhood: string;
    register_date: string;
    description: string;
    phone: string;
    user_id: string;
    image_path?: string;
}