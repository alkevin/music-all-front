import { Role } from './role';

export interface User {

  firstName: string;
  lastName: string;
  mail: string;
  roles: Role[];
  provider: string;
  providerId: string;
  connected: boolean;
}
