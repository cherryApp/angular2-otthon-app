import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() pageChange: EventEmitter<string> = new EventEmitter();

  public constructor(private titleHandler: Title, private config: ConfigService) {}

  ngOnInit() {
      this.titleHandler.setTitle( this.config.get('appTitle') );
  }

  onPageChange(pageUrl: string) {
    this.pageChange.emit(pageUrl);
  }
}
