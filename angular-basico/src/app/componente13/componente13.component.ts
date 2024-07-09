import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PipeArrayPipe } from '../pipe/pipe-array.pipe';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PipeArrayPipe],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {

  // Controle do que o usuário irá digitar para pesquisar
  nomes:Array<{nome:string}> = []
  filtro:string = '';

  //Vetor
  vetor:Produto[] = [];

  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  // Objeto de Formulário
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  })

  // Construtor
  constructor(private servico:ProdutoService){}

  //Inicialização do Componente
  ngOnInit(){
    this.selecionar();
  }

  // Método para selecionar os produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
    this.servico.selecionar().subscribe(retorno => this.nomes = retorno);
  }

  // Método para cadastrar produtos
  cadastrar(){

    // Verifica se o produto que está tentando cadastrar não existe com esse nome
    let indiceExiste = this.vetor.findIndex(obj => {
      this.formulario.value.nome === obj.nome;
    });

    if(indiceExiste == 0){
      this.servico.cadastrar(this.formulario.value as Produto)
      .subscribe(retorno => {
        this.vetor.push(retorno);

      this.formulario.reset();
      })
    }else{
      alert('Produto já cadastrado com esse nome!');
      this.formulario.reset();
      window.location.reload();
    }
  }

  // Método para selecionar um produto específico
  selecionarProduto(indice:number){

    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;

  }

  // Método para alterar produtos
  alterar(){
    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {

      // Obter o índice do objeto alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });

      // Alterar o vetor
      this.vetor[indiceAlterado] = retorno;

      // Limpar formulário
      this.formulario.reset();

      // Visibilidade dos botões
      this.btnCadastrar = true;
    })
  }

  // Método para remover produtos
  remover(){
    this.servico.remover(this.formulario.value.id)
    .subscribe(() => {

      // Obter o indice do vetor que será removido
      let indiceRemovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      });

      // Remover objeto do vetor
      this.vetor.splice(indiceRemovido, 1);

      // Limpar o formulário
      this.formulario.reset();

      // Visibilidade dos botões
      this.btnCadastrar = true;
    })
  }

}
