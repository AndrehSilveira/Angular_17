import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-01',
  standalone: true,
  imports: [],
  templateUrl: './componente-01.component.html',
  styleUrl: './componente-01.component.css'
})
export class Componente01Component {
  
  // Variáveis

  nome:string = 'André';
  idade:number = 34;
}
