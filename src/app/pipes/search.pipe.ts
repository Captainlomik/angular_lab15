import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(persons: Person[], value: string) {
    if(value==undefined)
    value='';

    return persons.filter(person => {
      return person.name.toLowerCase().indexOf(value.toLowerCase()) != -1 ||
        person.surname.toLowerCase().indexOf(value.toLowerCase()) != -1;
    });
  }

}
