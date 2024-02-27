import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  getStates(category: string): void {
    localStorage.setItem('filter', JSON.stringify([{ category: category }]));
    localStorage.setItem('filterCategory', JSON.stringify([category]));
  }
}
