import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bs-gellaryview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bs-gellaryview.component.html',
  styleUrl: './bs-gellaryview.component.scss'
})
export class BsGellaryviewComponent {
  @Input() BuySellArray: any

}
