import { Injectable } from '@angular/core';
import { Preferences, GetResult } from '@capacitor/preferences';
import { Publicacion } from '../Modelo/ListaPublicaciones';

@Injectable({
  providedIn: 'root'
})
export class publicacionService {

  // declaramos la llave
  private readonly KEY_PUBLICACION = "PUBLICACION";

  constructor() { }

  async guardarPublicacion(publicacion: Publicacion[]): Promise<void> {
    await Preferences.set({ key: this.KEY_PUBLICACION, value: JSON.stringify(publicacion) });
  }

  async obtenerPublicacion(): Promise<Publicacion[]> {
    const publicacionString: GetResult | null = await Preferences.get({ key: this.KEY_PUBLICACION });
    if (publicacionString && publicacionString.value) {
      return JSON.parse(publicacionString.value);
    } else {
      return [];
    }
  }

} 