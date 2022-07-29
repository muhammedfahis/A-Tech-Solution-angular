import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {
  @Input('selectedVegitable') selectedVegitable: any
  constructor() { }

  ngOnInit(): void {
  }

}
