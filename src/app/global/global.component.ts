import { Component, OnInit } from '@angular/core';
import { PrintService } from '../shared/print.service';
import { Person } from '../shared/models/person.model';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  persons: Person[] = [];

  constructor(private printService: PrintService) { }

  async ngOnInit() {
    try {
      let persons = this.printService.getData();
      this.persons = (isNullOrUndefined(await persons)) ? [] : await persons;
    }
    catch (err) {
      console.error(err);
    }
  }

  async onAddPerson(person: Person) {
    try {
      await this.printService.postPerson(person);
      this.ngOnInit();
    }
    catch (err) { console.error(err); }
  }

  async delete(person: Person, index: number) {
    try {
      await this.printService.deletePerson(person.id);
      this.persons.splice(index, 1);
      this.ngOnInit();
    }
    catch (err) { console.error(err); }
  }

  async change(person: Person) {

    try {
      await this.printService.putPerson(person.id, person);
      this.ngOnInit();
    }
    catch (err) { console.error(err) }
  }
}