import type { UserRole } from '../services/models/types';

export type RoleCardInfo = {
  id: UserRole;
  title: string;
  description: string;
  color: string; // Tailwind utility classes for bg/hover/border
};

export const roleCards: RoleCardInfo[] = [
  {
    id: 'recruiter',
    title: 'Recruiter',
    description: 'Access your recruitment dashboard, manage candidates, and track performance',
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  {
    id: 'teamlead',
    title: 'Team Lead',
    description: 'Monitor team performance, review reports, and manage recruitment teams',
    color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200'
  },
  {
    id: 'manager',
    title: 'Manager',
    description: 'Strategic oversight, department analytics, and resource management',
    color: 'bg-purple-50 hover:bg-purple-100 border-purple-200'
  },
  {
    id: 'admin',
    title: 'Admin',
    description: 'Full system access, user management, and organizational insights',
    color: 'bg-orange-50 hover:bg-orange-100 border-orange-200'
  }
];
