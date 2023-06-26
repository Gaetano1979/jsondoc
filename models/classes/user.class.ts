import { IUser } from '../interfaces';
import { IAdress } from '../interfaces/adress.interface';

export class User implements IUser {
  name: string;
  lastname: string;
  age: number;
  adress: IAdress;

  getCompleteName() {
    return `${this.name} * ${this.lastname}`;
  }

  /**
   * @description the function return name * lastname of user
   * dell'user
   */
  getFullName() {
    return `${this.name} * ${this.lastname}`;
  }

  getAdress() {}
}
