import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/shared/components/card/card.component';
import { RecentTransactionsComponent } from 'src/shared/components/recent-transactions/recent-transactions.component';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule,
  ApexNonAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent, RecentTransactionsComponent, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: {
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Weekly Spending"
      },
      xaxis: {
        categories: []
      }
    };
  }

  ngOnInit(): void {
    this.chartOptions.series = [
      {
        name: 'Sample Data',
        data: [10, 20, 30, 40],
      },
    ];

    this.chartOptions.xaxis = {
      categories: ["food", "rent", "travel", "other"]
    }
  }
}
