import { Privilege } from './privilege';

export interface Role {

  privileges: Privilege[];
  name: string;
  authority: string;

}
