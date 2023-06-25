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
   * @description La funzione restituisce nome e cognome
   * dell'user
   */
  getName() {
    return `${this.name} * ${this.lastname}`;
  }

  getAdress() {}
}
