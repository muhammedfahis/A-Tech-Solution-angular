import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vegitables: any[] = [];
  constructor(private dashboardService: DashboardService,
    public router: Router,) { }

  ngOnInit(): void {
    this.getVegitableList();
  }

  getVegitableList() {
    this.dashboardService.getVegitables('')
      .subscribe(
        (response) => {
          if (response.data) {
            this.vegitables = response.data
          } else {
            this.vegitables = [];
          }
        }
      )
  }
  onClickLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
