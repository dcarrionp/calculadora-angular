import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent {
  segundos: number = 0;
  @Input () intervalo = 0;
  @Output() tiempo = new EventEmitter<number>()

  ngOnInit(){
    console.log("Iniciando SesionComponent");
    this.tiempo.emit(this.segundos)
    setInterval(() => {
      this.segundos++
      console.log(this.segundos, this.intervalo)
      if(this.segundos % this.intervalo == 0)
        this.tiempo.emit(this.segundos)
      }, 1000);
    }
    reset(){
      this.segundos = 0,
      this.tiempo.emit(this.segundos)
    }
    setIntervalo(intervalo: number){
      this.intervalo = intervalo
    }
}
