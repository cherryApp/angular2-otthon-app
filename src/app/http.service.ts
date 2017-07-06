import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ConfigService } from './config.service';

@Injectable()
export class HttpService {

  constructor(private http: Http, private config: ConfigService) { }

  create(url: string, data: any) {
      return new Promise( (resolve, reject) => {
          try {
              data = JSON.stringify(data);
          } catch (err) {
              reject("Invalid object!");
          }

          this.http.put(url, data)
              .forEach(
                  (response: Response) => {
                      resolve(response);
                  }
              )
      });
  }

  read() {

  }

  update() {

  }

  delete() {

  }



}
