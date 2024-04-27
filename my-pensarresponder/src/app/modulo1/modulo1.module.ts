import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Child1Component } from './child1/child1.component';

const routes: Routes = [
  { path: 'child1', component: Child1Component },
];

@NgModule({
  declarations: [Child1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Modulo1Module { }
