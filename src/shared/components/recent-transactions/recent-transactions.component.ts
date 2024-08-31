import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.scss']
})
export class RecentTransactionsComponent {

  onImageNotFound(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = './assets/image/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';

  }
}
