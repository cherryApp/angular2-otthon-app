import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  data: Object = {
      appTitle: "Csupaszív Nyugdíjasház"
  };

  constructor() {}

  get(key) {
    return this.data[key] || null;
  }

  set(key, value) {
      this.data[key] = value;
      return true;
  }

}
