import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiplicacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {
  // TypeScript dentro del componente
mul1: number = 0;
mul2: number = 0;
mulResult: number | string = '';

calculateMultiplication(): void {
    this.mulResult = this.mul1 * this.mul2;
}

}
