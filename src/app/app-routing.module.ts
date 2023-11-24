import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo:'clients', pathMatch: 'full'
  },
  {
    path: 'clients',
    loadChildren: () =>import('./clients/clients.module').then(m => m.ClientsModule)  // aplicando lazy loading
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
