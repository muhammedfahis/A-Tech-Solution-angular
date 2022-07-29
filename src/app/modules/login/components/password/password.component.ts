import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @Output() passwordEvent = new EventEmitter<string>();
  password: any;

  constructor() { }

  ngOnInit(): void {
  }
  onChange($event: string) {
    // console.log($event)
    this.passwordEvent.emit($event);
  }

}
