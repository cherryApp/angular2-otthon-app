import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Room } from '../model/Room';
import { RoomService } from '../room.service';

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"]
})
export class RoomsComponent implements OnInit, OnDestroy {
  @Output() rooms: Array<Room> = [];
  @Output()
  keys: Array<{ key: string; label: string }> = [
    { key: "id", label: "#" },
    { key: "name", label: "név" },
    { key: "size", label: "méret" },
    { key: "slot", label: "férőhely" },
    { key: "floor", label: "szint" },
    { key: "active", label: "aktív" }
  ];
  @Output() newRoom: Room = new Room(0);
  private subjectSubrcibe = null;

  constructor(private service: RoomService) {}

  ngOnInit() {
    this.subjectSubrcibe = this.service.roomSubject.subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  ngOnDestroy(): void {
    this.subjectSubrcibe.unsubscribe();
  }

  createRoom() {
    this.service.pushOne(this.newRoom).then((res: Response) => {
      console.log(res);
      this.service.getAll();
      this.newRoom = new Room();
    });
  }

  edit(room: Room) {
      this.service.edit(room).then((res: Response) => {
        console.log(res);
        this.service.getAll();
      });
  }

  remove(room: Room) {
      this.service.remove(room).then((res: Response) => {
        console.log(res);
        this.service.getAll();
      });
  }
}
