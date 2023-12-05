import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ClientsRes } from './../../../models/clients/clients';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(
    private clientService: ClientsService
  ){}

  ngOnInit(): void {
    this.getClients();
  }


  getClients(): void {
    this.clientService.loadClients().subscribe(
      (res: ClientsRes) => {
        console.log('valor de la respuesta del servicio: ',res);
      }
    )
  }
}
