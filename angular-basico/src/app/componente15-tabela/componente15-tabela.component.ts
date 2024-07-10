import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-componente15-tabela',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './componente15-tabela.component.html',
  styleUrl: './componente15-tabela.component.css'
})
export class Componente15TabelaComponent {

  @Input() vetor:string[]=[];

}
