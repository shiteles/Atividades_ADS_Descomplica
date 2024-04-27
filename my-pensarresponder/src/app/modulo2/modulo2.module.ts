import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  { path: 'child2', component: Child2Component }
];

@NgModule({
  declarations: [Child2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Modulo2Module { }
