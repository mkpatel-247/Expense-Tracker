import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/shared/components/card/card.component';
import { RecentTransactionsComponent } from 'src/shared/components/recent-transactions/recent-transactions.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent, RecentTransactionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  cardsDetails = [
    { title: 'Income', amount: '4500' },
    { title: 'Expense', amount: '500' },
  ]

}
