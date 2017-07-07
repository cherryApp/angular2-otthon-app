import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Http, Response } from '@angular/http';
import { ConfigService } from './config.service';
import { Room } from './model/Room';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RoomService extends HttpService {
  private baseUrl: string;
  public rooms: Array<Room> = [];

  constructor(http: Http, config: ConfigService) {
    super(http, config);
    this.baseUrl = this.config.get('usersApi');
    this.getAll();
  }

  public roomSubject: Subject<any> = new Subject();

  getAll() {
    this.read(`${this.baseUrl}/room/all`)
        .then(
            (response: Response) => {
                this.rooms = response.json();
                this.roomSubject.next(this.rooms);
            }
        );
  }

  pushOne(room: Room) {
      return this.create(`${this.baseUrl}/room`, room);
  }

  edit(room: Room) {
      return this.update(`${this.baseUrl}/room/${room.id}`, room);
  }

  remove(room: Room) {
      return this.delete(`${this.baseUrl}/room/${room.id}`);
  }

}
