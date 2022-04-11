import { Component} from '@angular/core';
import { operations } from './operations.constants';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent {

  operations = operations;
  
  buffer: number = 0;

  op1: number = 0;

  op2: number=0;

  operation: number = 0;
 
  delete: boolean = false;

  constructor() { }

  addNumber(numero: number): void { 
   if(this.buffer) {
      this.buffer = 0;
      this.delete = false;
    }
    this.buffer = this.buffer * 10 + numero;
  }

  clear(): void {
    this.buffer = 0;
  }

  operate(ope: number): void {
    this.op1 = this.buffer;
    //this.buffer = 0;
    switch(ope){
      case 1: this.operation = operations.ADD;
      break;
      case 2: this.operation = operations.SUBTRACT;
      break;
      case 3: this.operation = operations.MULTIPLY;
      break;
      case 4: this.operation = operations.DIVIDE;
      break;
    }
  }

  result(): void {
    this.op2 = this.buffer;
    switch(this.operation) {
      case 1: this.buffer = this.op1 + this.op2;
      break;
      case 2: this.buffer = this.op1 - this.op2;
      break;
      case 3: this.buffer = this.op1 * this.op2;
      break;
      case 4: this.buffer = this.op1 / this.op2;
    }
    this.op1 = 0;
    this.op2 = 0;
    this.delete = true;
  }

}
