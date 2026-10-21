export type NeighborhoodPriority = 'ALTA' | 'MÉDIA' | 'BAIXA';

export interface Neighborhood {
    id: string;
    Neighborhood: string;
    priority: NeighborhoodPriority;
    Total?: number
}