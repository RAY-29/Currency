import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [{
  path:'convert',
  component:OutputComponent,
  pathMatch:'full'
},
{
  path:'',
  component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
