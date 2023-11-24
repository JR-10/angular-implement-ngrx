import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientComponent } from './components/client/client.component';
import { ClientByIdComponent } from './components/client-by-id/client-by-id.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientsRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [
    ClientsComponent,
    ClientComponent,
    ClientByIdComponent,
    ClientUpdateComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule, // rutas del modulo
  ]
})
export class ClientsModule { }
