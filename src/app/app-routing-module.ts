import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos.component/departamentos.component';

const routes: Routes = [
  {path: "", component: DepartamentosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
