import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-saved-recipe',
  templateUrl: './saved-recipe.component.html',
  styleUrls: ['./saved-recipe.component.scss'],
})
export class SavedRecipeComponent implements OnInit {
  constructor(public userService: UserService) {}
  ngOnInit(): void {}

}
