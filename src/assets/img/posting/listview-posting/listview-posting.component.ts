import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-listview-posting',
  standalone: true,
  imports: [RouterModule, CommonModule, TableModule],
  templateUrl: './listview-posting.component.html',
  styleUrl: './listview-posting.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ListviewPostingComponent {
  first = 0;
  rows = 20;
  @Input()
  postingarray!: PostingData[];
  @Input() filterposts: any;

}
