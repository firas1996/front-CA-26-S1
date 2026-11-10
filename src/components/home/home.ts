import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { UserCard } from '../user-card/user-card';
import { TicketCard, TicketPriority, TicketStatus } from '../ticket-card/ticket-card';

@Component({
  selector: 'app-home',
  imports: [NavBar, UserCard, TicketCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users = [
    { name: 'Sarah Ben Ali', role: 'Project Manager', online: true },
    { name: 'Youssef Trabelsi', role: 'Developer', online: true },
    { name: 'Amira Khelifi', role: 'Designer', online: false },
    { name: 'Mehdi Gharbi', role: 'QA Engineer', online: false },
  ];

  tickets: {
    id: number;
    title: string;
    description: string;
    status: TicketStatus;
    priority: TicketPriority;
    assignee: string;
    date: string;
  }[] = [
    {
      id: 101,
      title: 'Login page returns 500 error',
      description: 'Submitting valid credentials sometimes crashes the auth endpoint.',
      status: 'open',
      priority: 'high',
      assignee: 'Youssef',
      date: 'Nov 10',
    },
    {
      id: 102,
      title: 'Redesign dashboard layout',
      description: 'Update the home page to use the new design system and spacing.',
      status: 'in-progress',
      priority: 'medium',
      assignee: 'Amira',
      date: 'Nov 8',
    },
    {
      id: 103,
      title: 'Write tests for ticket service',
      description: 'Cover create, update and delete flows with unit tests.',
      status: 'done',
      priority: 'low',
      assignee: 'Mehdi',
      date: 'Nov 5',
    },
  ];
}
