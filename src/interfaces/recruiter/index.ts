import { EmployeeInterface } from 'interfaces/employee';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RecruiterInterface {
  id?: string;
  first_name: string;
  last_name: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  employee?: EmployeeInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
  };
}

export interface RecruiterGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  user_id?: string;
}
