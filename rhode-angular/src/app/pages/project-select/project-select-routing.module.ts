import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectSelectPage } from './project-select.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectSelectPageRoutingModule {}
