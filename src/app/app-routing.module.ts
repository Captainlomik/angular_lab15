import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPersonComponent } from './view-person/view-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { GlobalComponent } from './global/global.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
{path: '', component:GlobalComponent},
{path: 'add', component:AddPersonComponent},
{path:'info/:id', component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
