import { Injectable } from '@angular/core';
import { User } from 'src/app/_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      username: 'adrian.rendon', name: 'Adrian rendon'
    },{
      username: 'adrian.rendon', name: 'Adrian rendon'
    },{
      username: 'adrian.rendon', name: 'Adrian rendon'
    },{
      username: 'adrian.rendon', name: 'Adrian rendon'
    },{
      username: 'adrian.rendon', name: 'Adrian rendon'
    },{
      username: 'adrian.rendon', name: 'Adrian rendon'
    },{
      username: 'adrian.rendon', name: 'Adrian rendon'
    },{
      username: 'adrian.rendon', name: 'Adrian rendon'
    },{
      username: 'adrian.rendon', name: 'Adrian rendon'
    },
    
   ];
  constructor() { }

  getUsers():User[] {
    return this.users;
  }
  deleteUser() {
    alert('Boton de borrado activado.');
  }

}
