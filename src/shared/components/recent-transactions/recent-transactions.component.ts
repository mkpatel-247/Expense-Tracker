import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.scss']
})
export class RecentTransactionsComponent implements OnInit {

  recentTransactions = [
    { id: 1, status: 'income', name: 'pizza', category: 'food', amount: 342 },
    { id: 2, status: 'income', name: 'PavBhaji', category: 'food', amount: 390 },
    { id: 3, status: 'expense', name: 'fix thali', category: 'food', amount: 40 },
    { id: 4, status: 'income', name: 'pani puri', category: 'food', amount: 680 },
    { id: 5, status: 'expense', name: 'PavBhaji', category: 'food', amount: 120 },
  ]

  ngOnInit(): void {

  }

  /**
   * Change the not found image with the default image.
   * @param event HTML Element
   */
  onImageNotFound(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = './assets/image/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
  }
}
