import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.scss'],
})
export class WorkInProgressComponent implements OnInit {
  constructor(public userService: UserService) {}
  ngOnInit(): void {}

}
