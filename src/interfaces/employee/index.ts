import { UserInterface } from 'interfaces/user';
import { RecruiterInterface } from 'interfaces/recruiter';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  user_id?: string;
  recruiter_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  recruiter?: RecruiterInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  user_id?: string;
  recruiter_id?: string;
}
