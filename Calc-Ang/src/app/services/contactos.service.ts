
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  mensajes: String[] = []

  constructor() { }
  add(message: String){
    this.mensajes.push(message)
  }

  clear(){
    this.mensajes = []
  }

  get(){
    return this.mensajes
  }
}
