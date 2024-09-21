import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-discover-recipe',
  templateUrl: './discover-recipe.component.html',
  styleUrls: ['./discover-recipe.component.scss'],
})
export class DiscoverRecipeComponent implements OnInit {
  constructor(public userService: UserService) {}
  ngOnInit(): void {}

}
