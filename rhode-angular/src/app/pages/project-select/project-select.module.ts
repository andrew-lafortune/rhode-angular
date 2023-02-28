import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectSelectPageRoutingModule } from './project-select-routing.module';

import { ProjectSelectPage } from './project-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectSelectPageRoutingModule
  ],
  declarations: [ProjectSelectPage]
})
export class ProjectSelectPageModule {}
