import { Component } from '@angular/core';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
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
    displayedColumns: string[] = ['username', 'name', 'actions', ];
  
    addButtonClicked() {
      alert('Boton de adicion activado');
    }
    deleteButtonClick() {
      alert('Boton de borrar activado');
    }
}
