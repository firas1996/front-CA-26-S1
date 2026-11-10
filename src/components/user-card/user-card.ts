import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard implements OnInit {
  user = input.required<any>();
  ngOnInit(): void {
    console.log(this.user());
  }
}
