import { Component, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionComponent } from '../session/session.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, SessionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  intervalo = 10
  tiempoConexion: string = ' ';
  @Input() usuario : String = ''
  @ViewChild('tiempoSesion') tiempoSesion!: SessionComponent;

  actualizar(segundos: number){
    this.tiempoConexion = segundos + ' s '
  }

  nuevoIntervalo(intervalo: number){
    console.log(intervalo);
    this.tiempoSesion.setIntervalo(intervalo)
  }
}