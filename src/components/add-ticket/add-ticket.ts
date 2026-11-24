import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-ticket',
  imports: [FormsModule, NgMultiSelectDropDownModule],
  templateUrl: './add-ticket.html',
  styleUrl: './add-ticket.css',
})
export class AddTicket implements OnInit {
  dropdownList = [
    { item_id: 1, item_text: 'Ali' },
    { item_id: 2, item_text: 'Salah' },
    { item_id: 3, item_text: 'Omar' },
    { item_id: 4, item_text: 'Navsari' },
    { item_id: 5, item_text: 'New Delhi' },
  ];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  ngOnInit() {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
