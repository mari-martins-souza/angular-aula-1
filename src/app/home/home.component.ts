import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
  }
]
}
