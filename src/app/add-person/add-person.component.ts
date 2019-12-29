import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { PrintService } from '../shared/print.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../shared/models/person.model';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  addForm: FormGroup;
  public phonemask = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  id: number;

  constructor(private printService: PrintService, private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe(param => {
      if (!isNullOrUndefined(param.id)) {
        this.id = +param.id;
      } else {
        this.id = null;
      }
    });
  }


  ngOnInit() {
    this.addForm = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.pattern(/^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)),
        email: new FormControl('', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
      }
    );

    //this.changeData()
  }

  /*async changeData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let newPers = await this.printService.getPersonId(this.id);
        this.addForm.patchValue(newPers);
      }
      catch (err) {

      }
    }
  }*/

  async onEdit(personId) {
    await this.printService.putPerson(personId, Person);
  }

  async onAddPerson() {
      try {
        await this.printService.postPerson(this.addForm.value);
        this.router.navigate(['/'])
      } catch (e) { }
  }
}
