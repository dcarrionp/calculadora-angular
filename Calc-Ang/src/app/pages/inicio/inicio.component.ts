import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistorialService } from '../../services/historial.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  // Access input field for the calculator
  @ViewChild('displayInput') displayInputRef!: ElementRef<HTMLInputElement>;

  ans: string = ''; // Store the current result or expression
  messages: string[] = [];

  // Inject HistorialService for calculation history management
  constructor(private historialService: HistorialService) {}

  // Retrieve history when the component initializes
  ngOnInit(): void {
    // Retrieve historical messages on initialization
    this.messages = this.historialService.get();
  }

  // Append a value to the calculator display
  appendToDisplay(value: string): void {
    const display = this.displayInputRef.nativeElement;
    display.value += value;
    this.ans += value;
  }

  // Clear the calculator display
  clearDisplay(): void {
    const display = this.displayInputRef.nativeElement;
    display.value = '';
    this.ans = ''; // Reset the stored answer
  }

  // Evaluate the expression, add it to history, and update the display
  calculate(): void {
    const display = this.displayInputRef.nativeElement;
    try {
      this.ans = new Function('return ' + display.value)().toString();
      display.value = this.ans; // Update the display with the result
      this.add(); // Save the result to the history
    } catch (error) {
      display.value = 'Error';
      this.ans = ''; // Clear the answer on error
    }
  }

  // Add the latest answer to the calculation history
  add(): void {
    this.historialService.add(this.ans);
    // Update messages after a new entry is added
    this.messages = this.historialService.get();
  }

  clearHistorial(): void {
    this.historialService.clear();
    this.messages = [];
  }
}
