import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-resta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resta.component.html',
  styleUrl: './resta.component.css'
})
export class RestaComponent {

  // TypeScript dentro del componente
res1: number = 0;
res2: number = 0;
resResult: number | string = '';

calculateRes(): void {
    this.resResult = this.res1 - this.res2;
}


}
