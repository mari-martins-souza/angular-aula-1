import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listaProdutos = [
  {
    imagem: 'assets/pera.jpg',
    produto: 'pera',
    valor: '3,50'
  },
  {
    imagem: 'assets/uva.jpg',
    produto: 'uva',
    valor: '7,50'
  },
  {
    imagem: 'assets/maca.jpg',
    produto: 'maçã',
    valor: '5,00'
  }
]
}
