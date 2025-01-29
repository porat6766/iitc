import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css'] 
})
export class TrafficComponent {
  @Input() dummyTrafficData: { id: string; value: number }[] = []; 
  @Input() maxTraffic: number = 0; 
}
