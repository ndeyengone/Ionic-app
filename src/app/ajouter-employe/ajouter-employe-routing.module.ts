import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterEmployePage } from './ajouter-employe.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterEmployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterEmployePageRoutingModule {}
