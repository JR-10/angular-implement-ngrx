import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list', component: ClientsComponent
      },
      {
        path: 'clientUpdate', component: ClientUpdateComponent
      },
      {
        path: '**', redirectTo: 'list', pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientsRoutingModule { }
