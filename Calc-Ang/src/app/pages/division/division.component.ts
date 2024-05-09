import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-division',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './division.component.html',
  styleUrl: './division.component.css'
})
export class DivisionComponent {
  // TypeScript dentro del componente
div1: number = 0;
div2: number = 1;
divResult: number | string = '';

calculateDivision(): void {
    if (this.div2 === 0) {
        this.divResult = 'Error: División por cero';
    } else {
        this.divResult = this.div1 / this.div2;
    }
}

}
