import { Guid } from 'guid-typescript';

export interface ITodoItem{
    id: Guid;
    status: 'ACTIVE' | 'COMPLETED';
    Content: string;
}