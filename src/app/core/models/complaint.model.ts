export interface ComplaintById {
    neighborhoodId: string;
    priority: string;
    complaintsByNeighborhood: Complaint[];
}

export interface Complaint {
    id: string;
    problem: string;
    priority?: string;
    status: string;
    street: string;
    neighborhood: string;
    register_date: string;
    description: string;
    image_path?: string;
}