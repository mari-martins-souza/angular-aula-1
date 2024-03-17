import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  textoPesquisa: string | undefined;
  pesquisar() {
    this.listaProdutosFiltro = this.listaProdutos.filter(item => item.fruta === this.textoPesquisa)
  }
  listaProdutos = [
  {
    imagem: 'assets/pera.jpg',
    fruta: 'pera',
    valor: '3,50'
  },
  {
    imagem: 'assets/uva.jpg',
    fruta: 'uva',
    valor: '7,50'
  },
  {
    imagem: 'assets/maca.jpg',
    fruta: 'maçã',
    valor: '5,00'
  },
  {
    imagem: 'assets/banana.jpg',
    fruta: 'banana',
    valor: '2,50'
  }
]
  listaProdutosFiltro = this.listaProdutos;
}
