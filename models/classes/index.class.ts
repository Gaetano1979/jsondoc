import { IUser } from '../interfaces';
import { IAdress } from '../interfaces/adress.interface';

export class User implements IUser {
  name: string;
  lastname: string;
  age: number;
  adress: IAdress;
}
