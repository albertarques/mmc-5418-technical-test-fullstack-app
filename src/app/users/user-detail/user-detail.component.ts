import { Component, Input } from '@angular/core';
import { User } from '../../models/User.model';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  @Input() user!: User;

}
