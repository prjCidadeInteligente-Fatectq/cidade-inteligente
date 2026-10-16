export type NeighborhoodPriority = 'ALTA' | 'MÉDIA' | 'BAIXA';

export interface Neighbohood {
    id: string;
    name: string;
    priority: NeighborhoodPriority;
}