import { Component, OnInit } from '@angular/core';
import { ConsumerService } from './repro/consumer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private consumer: ConsumerService
  ) {}

  ngOnInit() {
    this.consumer.foo();
  }
}
