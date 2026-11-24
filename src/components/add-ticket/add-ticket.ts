import { Component, HostListener, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Priority = 'Low' | 'Medium' | 'High';

@Component({
  selector: 'app-add-ticket',
  imports: [FormsModule],
  templateUrl: './add-ticket.html',
  styleUrl: './add-ticket.css',
})
export class AddTicket {
  open = input(false);
  users = input<any[]>([]);
  closed = output<void>();

  readonly priorities: Priority[] = ['Low', 'Medium', 'High'];

  title = '';
  description = '';
  dueDate = '';
  priority: Priority = 'Medium';
  assigneeQuery = '';
  attempted = false;
  private selectedIds = signal<string[]>([]);

  teammates = computed(() => {
    const value = this.users();
    return Array.isArray(value) ? value : [];
  });

  filteredUsers() {
    const query = this.assigneeQuery.trim().toLowerCase();
    const people = this.teammates();
    if (!query) return people;
    return people.filter((user) => {
      const name = String(user?.name ?? '').toLowerCase();
      const role = String(user?.role ?? '').toLowerCase();
      return name.includes(query) || role.includes(query);
    });
  }

  selectedUsers = computed(() => {
    const ids = new Set(this.selectedIds());
    return this.teammates().filter((user) => ids.has(user?._id));
  });

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.open()) this.close();
  }

  isSelected(user: any) {
    return this.selectedIds().includes(user?._id);
  }

  toggleUser(user: any) {
    const id = user?._id;
    if (!id) return;
    this.selectedIds.update((ids) =>
      ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id],
    );
  }

  initials(name: string | undefined) {
    const letters = String(name ?? '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '');
    return letters.join('') || '?';
  }

  onSubmit() {
    this.attempted = true;
    if (!this.title.trim()) return;
    this.close();
  }

  close() {
    this.closed.emit();
    const snapshot = this.open();
    setTimeout(() => {
      if (!snapshot || !this.open()) this.reset();
    }, 200);
  }

  private reset() {
    this.title = '';
    this.description = '';
    this.dueDate = '';
    this.priority = 'Medium';
    this.assigneeQuery = '';
    this.attempted = false;
    this.selectedIds.set([]);
  }
}
