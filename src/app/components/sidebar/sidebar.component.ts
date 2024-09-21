import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(public userService: UserService) {}
  @Input() panels: any[] = []

  ngOnInit(): void {}

}
