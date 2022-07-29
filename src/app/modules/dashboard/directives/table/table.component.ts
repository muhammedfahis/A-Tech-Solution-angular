import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('tableData') tableData: any[] = [];
  searchValue: any = '';
  selectedVegitable: any;
  constructor(private dashboardService: DashboardService) { }
  page = 1;
  maxSize = 5;
  orderby: string = 'name';
  order: string = 'desc'

  ngOnInit(): void {

  }

  onSort(key: string) {
    if (this.orderby === key) {
      if (this.order === 'asc') {
        this.order = 'desc'
      } else {
        this.order = 'asc'
      }
    } else {
      this.orderby = key
      this.order = 'desc'
    }
    this.page = 1
    this.tableData = this.dashboardService.sortList(this.tableData, this.orderby, this.order);
  }

  onChangeSearchValue(event: any) {
    this.dashboardService.getVegitables(this.searchValue)
      .subscribe(
        (response: any) => {
          if (response.data) {
            this.tableData = response.data
          } else {
            this.tableData = [];
          }
        }
      )
  }

  onClickVegitable(vegitable: any) {
    this.selectedVegitable = vegitable;
    // this.selectedVegitable.vitamins = this.selectedVegitable.vitamins.join(',')
  }

}
