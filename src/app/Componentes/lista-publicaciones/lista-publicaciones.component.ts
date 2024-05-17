import { Component, Input,Output, OnInit, EventEmitter} from '@angular/core';
import { IonItem, IonText,IonList, IonImg, IonIcon, IonButton, IonModal, 
         IonLabel, IonFabButton, IonContent, IonCol, IonGrid, IonHeader, IonRow } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { publicacionService } from 'src/app/Servicios/persistencia-publicaciones.service';
import { Publicacion } from 'src/app/Modelo/ListaPublicaciones';
import { addIcons } from 'ionicons';
import { trash, add } from 'ionicons/icons';

@Component({
  selector: 'app-lista-publicaciones',
  templateUrl: './lista-publicaciones.component.html',
  styleUrls: ['./lista-publicaciones.component.scss'],
  standalone: true,
  imports: [IonRow, IonHeader, IonGrid, IonCol, IonContent, IonFabButton, IonText, IonModal, IonImg,
    IonIcon, IonButton, IonLabel, FormsModule, IonItem, IonList, 
    CommonModule ]
})
export class ListaPublicacionesComponent  implements OnInit {

  @Input() listaPublicacionesSave: Publicacion [] = [];
  isModalEiminar:boolean =false;
  imagenPorDefecto: string ="";
  valorEliminar:Publicacion | null=null;

  constructor(
    // injectamos el servicio qeu manejara la persistencia de los datos deseados
    private servicio:publicacionService 
    
  ) {
    addIcons({trash, add})
  }

  async ngOnInit() {
      this.listaPublicacionesSave = await this.servicio.obtenerPublicacion()
      console.log(this.listaPublicacionesSave);
  
  }

  borrarPublicacion(publicacionEliminar: Publicacion) {
    this.valorEliminar=publicacionEliminar
    this.isModalEiminar=true
    }

  async eliminarValor() {
    
      if (this.valorEliminar) {
        // Eliminamos la publicacion de la lista
        this.listaPublicacionesSave = this.listaPublicacionesSave.filter(publicacion => publicacion !== this.valorEliminar);
        //persistimos la lista actualizada
        await this.servicio.guardarPublicacion(this.listaPublicacionesSave);
        // limpiamos la variable para que se pueda usar sin problemas
        this.valorEliminar = null;
      }
      // cerramos le modal de eliminacion
      this.closeModal();
  }
  
  closeModal() {
      this.isModalEiminar=false
  }

}


