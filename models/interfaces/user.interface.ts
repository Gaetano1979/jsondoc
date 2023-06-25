import { IAdress } from '.';

export interface IUser {
  name: string;
  lastname: string;
  age: number;
  adress: IAdress;
}
