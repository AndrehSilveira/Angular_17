import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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

  //Armazenar indice
  indice:number = -1;

  cadastrar(){

    //Cadastro do vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //Limpeza dos inputs
    this.formulario.reset();

    //visualização no console
    //console.table(this.vetor);

  }

  //Função de seleção
  selecionar(indice:number){

    //Atribuir o indice da pessoa
    this.indice = indice;

    //Atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome   : this.vetor[indice].nome,
      idade  : this.vetor[indice].idade,
      cidade : this.vetor[indice].cidade
    });

    //Visibilidade dos botões
    this.btnCadastrar = false;
  }

  // Função de alteração
  alterar(){

    //Alterar o vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    // Limpar os inputs
    this.formulario.reset();

    // Visibilidade dos botões
    this.btnCadastrar = true;
  }

  // Função de remoção
  remover(){

    //Removendo pessoa do vetor
    this.vetor.splice(this.indice, 1);

    //Limpeza dos inputs
    this.formulario.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
  }

  // Função de cancelamento
  cancelar(){

    // Limpeza dos inputs
    this.formulario.reset();

    // Visibilidade dos botões
    this.btnCadastrar = true;
  }



  

}
