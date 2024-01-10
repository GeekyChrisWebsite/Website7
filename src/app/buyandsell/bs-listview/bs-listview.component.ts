import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-bs-listview',
  standalone: true,
  imports: [CommonModule, TableModule, RouterModule],
  templateUrl: './bs-listview.component.html',
  styleUrl: './bs-listview.component.scss'
})
export class BsListviewComponent {

  @Input() BuySellArray: any;
}
