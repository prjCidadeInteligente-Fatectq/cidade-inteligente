import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
