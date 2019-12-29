import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../shared/models/person.model';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { PrintService } from '../shared/print.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
@Input() persons:Person[]=[];
id:number;

  constructor(private route: ActivatedRoute, private printService: PrintService) { 
    this.route.params.subscribe(param => {
      if (!isNullOrUndefined(param.id)) {
        this.id = +param.id;
      } else {
        this.id = null;
      }
    });

    this.info();
  }
  ngOnInit() {
     
  }

   async info(){
    if (!isNullOrUndefined(this.id)){
        try {
          let persons = this.printService.getPersonId(this.id);
          this.persons = (isNullOrUndefined(await persons)) ? [] : await persons;
        }
        catch (err) {
          console.error(err);
      }
    }
}}
