import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { UserCard } from '../user-card/user-card';
import { TicketCard } from '../ticket-card/ticket-card';

@Component({
  selector: 'app-home',
  imports: [NavBar, UserCard, TicketCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
