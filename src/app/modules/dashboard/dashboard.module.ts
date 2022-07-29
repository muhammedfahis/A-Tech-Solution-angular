import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TableComponent } from './directives/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewpageComponent } from './components/viewpage/viewpage.component';
import { AddVegitableComponent } from './components/add-vegitable/add-vegitable.component';
// import { ViewpageComponent } from './components/viewpage/viewpage.component'




@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    ViewpageComponent,
    AddVegitableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
