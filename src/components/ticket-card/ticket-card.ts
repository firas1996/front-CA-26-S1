import { Component, computed, input } from '@angular/core';

export type TicketStatus = 'open' | 'in-progress' | 'done';
export type TicketPriority = 'low' | 'medium' | 'high';

@Component({
  selector: 'app-ticket-card',
  imports: [],
  templateUrl: './ticket-card.html',
  styleUrl: './ticket-card.css',
})
export class TicketCard {
  id = input(0);
  title = input('Ticket title');
  description = input('');
  status = input<TicketStatus>('open');
  priority = input<TicketPriority>('medium');
  assignee = input('Unassigned');
  date = input('');

  statusLabel = computed(
    () => ({ open: 'Open', 'in-progress': 'In progress', done: 'Done' })[this.status()],
  );
}
