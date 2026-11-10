import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  name = input('User Name');
  role = input('Member');
  online = input(false);

  initials = computed(() =>
    this.name()
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase(),
  );
}
