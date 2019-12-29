import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  @Input() inPerson: Person;
  @Output() del = new EventEmitter<null>();
  @Output() ch = new EventEmitter<Person>();
  editMode = false;

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.del.emit();
  }

  onSave() {
    this.ch.emit(this.inPerson);
    this.editMode = false;
  }

}
