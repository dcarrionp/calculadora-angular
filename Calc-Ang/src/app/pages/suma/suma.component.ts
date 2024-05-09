import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './suma.component.html',
  styleUrl: './suma.component.css'
})
export class SumaComponent {

  // TypeScript dentro del componente
sum1: number = 0;
sum2: number = 0;
sumResult: number | string = '';

calculateSum(): void {
    this.sumResult = this.sum1 + this.sum2;
}


}
