import { Component, OnInit } from '@angular/core';
import { IonItem, IonText, IonList, IonInput, IonButton, IonIcon, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Publicacion } from 'src/app/Modelo/ListaPublicaciones';
import { publicacionService } from 'src/app/Servicios/persistencia-publicaciones.service';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { Camera, Photo, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-nueva-publicacion',
  templateUrl: './nueva-publicacion.component.html',
  styleUrls: ['./nueva-publicacion.component.scss'],
  standalone: true,
  imports: [IonImg, IonIcon, IonButton, IonInput, IonText, IonList, IonItem, FormsModule, CommonModule]
})
export class NuevaPublicacionComponent implements OnInit {

  tituloStr: string = "";
  descripcionStr: string = "";
  imagen: string = "";
  addPublicacion: Publicacion = new Publicacion(0, this.descripcionStr, this.tituloStr, "", this.imagen);
  foto: Photo | null = null;
  _listaUp:Publicacion[] =[]

  constructor(
    private servicio:publicacionService 
  ) { }

  ngOnInit() {

    addIcons({ camera });
  }

 async onClick() {
    this._listaUp = await this.servicio.obtenerPublicacion() 
    const fechaActual = new Date();
    const fecha = fechaActual.toISOString();
    this.addPublicacion.fecha = fecha;
    this.addPublicacion.descripcion = this.descripcionStr;
    this.addPublicacion.titulo = this.tituloStr;
    this.addPublicacion.imagen = this.imagen;
    this.addPublicacion.id = this._listaUp.length +1;
    this._listaUp.push(this.addPublicacion)
    await this.servicio.guardarPublicacion(this._listaUp)
    console.log(this.addPublicacion);
    console.log(this._listaUp)

  }

  async tomaFoto() {
    this.foto = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      correctOrientation: true,
      saveToGallery: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64,
    });

    if (this.foto && this.foto.base64String) {
      this.imagen = 'data:image/jpeg;base64,' + this.foto.base64String;
    }
  }
}