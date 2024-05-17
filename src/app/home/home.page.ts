import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../Modelo/ListaPublicaciones';
import { publicacionService } from '../Servicios/persistencia-publicaciones.service';
import { ListaPublicacionesComponent } from '../Componentes/lista-publicaciones/lista-publicaciones.component';
import { RouterModule } from '@angular/router';
import { IonFabButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule, IonFabButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, ListaPublicacionesComponent],
})
export class HomePage implements OnInit {

  _publicacion: Publicacion[] = [];

  constructor(private servicio: publicacionService) {
    this.resfrescarComponentes();
  }

  async ngOnInit() {
    await this.resfrescarComponentes();
  }

  private async resfrescarComponentes() {
    this._publicacion = await this.servicio.obtenerPublicacion();
  }

  async onNuevaPublicacionAgregada() {
    await this.resfrescarComponentes();
  }
}