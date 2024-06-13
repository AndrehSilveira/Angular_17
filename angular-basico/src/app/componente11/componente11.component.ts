import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  // objeto de formulário
  formulario = new FormGroup({
    nome    : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade    : new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
    cidade    : new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  //Vetor
  vetor:Pessoa[] = [];

}
