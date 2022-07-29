import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-add-vegitable',
  templateUrl: './add-vegitable.component.html',
  styleUrls: ['./add-vegitable.component.css']
})
export class AddVegitableComponent implements OnInit {
  vegitableForm: any;
  submitted: boolean = false;

  constructor(
    public router: Router,
    private dashbaordService: DashboardService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.vegitableForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      price: new FormControl('', [
        Validators.required
      ]),
      quantity: new FormControl('', [
        Validators.required
      ]),
      color: new FormControl('', [
        Validators.required
      ]),
      vitamins: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit() {
    console.log(this.vegitableForm.value);
    this.submitted = true;
    if (this.vegitableForm.valid) {
      this.dashbaordService.addVegitable(this.vegitableForm.value)
        .subscribe(
          (response: any) => {
            if (response.data) {
              document.getElementById('modal-close')?.click();
              this.router.navigateByUrl('/');
            }
          }
        )
    }
  }

}
