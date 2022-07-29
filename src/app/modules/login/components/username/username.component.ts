import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  @Output() emailEvent = new EventEmitter<string>();
  email: any;
  constructor() { }

  ngOnInit(): void {
  }
  onChange($event: string) {
    // console.log($event)
    this.emailEvent.emit($event);
  }

}
