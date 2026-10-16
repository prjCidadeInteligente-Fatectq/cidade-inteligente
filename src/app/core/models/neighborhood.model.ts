export type NeighborhoodPriority = 'ALTA' | 'MÉDIA' | 'BAIXA';

export interface Neighbohood {
    id: number;
    name: string;
    priority: NeighborhoodPriority;
}