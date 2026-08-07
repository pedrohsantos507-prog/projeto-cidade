import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cidade } from './Cidade';

@Component({
  selector: 'app-lista-cidades',
  imports: [FormsModule],
  templateUrl: './lista-cidades.html',
  styleUrl: './lista-cidades.css',
})
export class ListaCidade {

  listaCidades: Cidade[] = [];

  nomeCidade: string = '';
  numeroEleitores: number | null = null;

  // Guarda a cidade que está sendo editada
  cidadeEditando: Cidade | null = null;


  editarCidade(cidade: Cidade) {

    // Guarda a cidade que será alterada
    this.cidadeEditando = cidade;

    // Coloca os dados da cidade nos campos do formulário
    this.nomeCidade = cidade.nomeCidade;
    this.numeroEleitores = cidade.numeroEleitores;
  }


  addCidade() {

    // Se existe uma cidade em edição,
    // vamos alterar os dados dela
    if (this.cidadeEditando) {

      this.cidadeEditando.nomeCidade = this.nomeCidade;
      this.cidadeEditando.numeroEleitores = this.numeroEleitores ?? 0;

      // Sai do modo de edição
      this.cidadeEditando = null;

    } else {

      // Criando uma nova cidade
      let cidade = new Cidade();

      cidade.idCidade = this.listaCidades.length + 1;
      cidade.nomeCidade = this.nomeCidade;
      cidade.numeroEleitores = this.numeroEleitores ?? 0;

      // Adicionando a cidade na lista
      this.listaCidades.push(cidade);
    }

    // Limpando os campos
    this.nomeCidade = '';
    this.numeroEleitores = null;
  }


  selecionarCidade(cidade: Cidade) {
    cidade.selecionado = !cidade.selecionado;
  }


  excluirCidade(cidade: Cidade) {

    this.listaCidades = this.listaCidades.filter(
      c => c.idCidade !== cidade.idCidade
    );

  }


  limparTudo() {
    this.listaCidades = [];

    this.nomeCidade = '';
    this.numeroEleitores = null;
    this.cidadeEditando = null;
  }

}