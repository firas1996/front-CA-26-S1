import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { UserCard } from '../user-card/user-card';
import { TicketCard } from '../ticket-card/ticket-card';
import { Users } from '../../app/services/users';

@Component({
  selector: 'app-home',
  imports: [NavBar, UserCard, TicketCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private userService = inject(Users);
  users = signal<any | null>(null);

  ngOnInit(): void {
    this.userService.getusers().subscribe({
      next: (res: any) => {
        this.users.set(res.data);
        console.log('users', this.users());
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
