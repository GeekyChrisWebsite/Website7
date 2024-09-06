import { Component, Input } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gellaryview-posting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gellaryview-posting.component.html',
  styleUrl: './gellaryview-posting.component.scss'
})
export class GellaryviewPostingComponent {
  @Input()
  postingarray!: PostingData[];
  @Input() filterposts: any;

}
