export type NeighborhoodPriority = 'ALTA' | 'MÉDIA' | 'BAIXA';

export interface Neighbohood {
    id: number;
    neighborhood: string;
    priority: NeighborhoodPriority;
}