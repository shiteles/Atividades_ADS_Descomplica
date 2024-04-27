import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'modulo1', loadChildren: () => import('./modulo1/modulo1.module').then(m => m.Modulo1Module) },
  { path: 'modulo2', loadChildren: () => import('./modulo2/modulo2.module').then(m => m.Modulo2Module) }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
