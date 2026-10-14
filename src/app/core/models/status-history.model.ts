import { Complaint, ComplaintStatus } from './complaint.model';
import { User } from './user.model';

export interface StatusHistory {
    id: number;
    changedAt: string;
    user: User;
    complaint: Complaint;
    complaintStatus: ComplaintStatus;
}