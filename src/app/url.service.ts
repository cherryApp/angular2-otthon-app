import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UrlService {
  @Output() urlChanged: EventEmitter<{ url: string, data: Object }> = new EventEmitter();
  currentUrl: string = "/";

  constructor() { }

  jumpTo(url: string, data: Object = {}) {
    this.currentUrl = url;
    this.urlChanged.emit({ url: this.currentUrl, data });
  }

}
