import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFabButton } from '@ionic/angular/standalone';
import { ListaPublicacionesComponent } from '../Componentes/lista-publicaciones/lista-publicaciones.component';
import { RouterModule } from '@angular/router';
import { Publicacion } from '../Modelo/ListaPublicaciones';
import { publicacionService } from '../Servicios/persistencia-publicaciones.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule, IonFabButton, IonIcon, IonHeader, IonToolbar, IonTitle, 
            IonContent, ListaPublicacionesComponent],
})
export class HomePage implements OnInit {

_publicacion:Publicacion []=[]

  constructor(private servicio:publicacionService) {
    this.resfrescarComponentes()
  }

 async ngOnInit(){
  this._publicacion= await this.servicio.obtenerPublicacion()
  console.log(this._publicacion)
  this.resfrescarComponentes()


  }

  private resfrescarComponentes(){
    
    this.servicio.obtenerPublicacion().then(publicacion => {this._publicacion = publicacion})

  }

}
